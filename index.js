global._expandy = {
    version: 0.1,
    database: null,
    cwd: __dirname
};

// Regular library, lowercase variable name
const fs = require('fs-nextra');
const path = require('path');
const uuid = require('uuid');
const http = require('http');

// Install the log function, its important
const instanceID = uuid.v1(); // Instance ID
async function log(text) {
    console.log(text);
    let toWrite = `[${instanceID}] [${process.uptime()}] ${text}\n`;
    await fs.appendFile(path.join(global._expandy.cwd, "log.txt"), toWrite);
}

console.log("Instance ID: " + instanceID);

// Uninitialized libraries, upper case variable names
const Database = require('better-sqlite3');
const Socketio = require('socket.io');
const Express = require('express');

// Variables
const sockEvents = {};
const updateEvents = [];


// Class for handling multiple message handlers at once
class Msg {
    constructor(type, socket) {
        this.type = type;
        this.socket = socket;
    }
    run(msg) {
        for (let i=0;i<sockEvents[this.type].length;i++)
            sockEvents[this.type][i](msg, this.socket);
    }
}

// Start the program
(async function init() {
    await log("==================================");
    await log("Starting ExpandyServer");

    // Read and parse config
    let config = await fs.readFile("config.json", "utf-8");
    config = JSON.parse(config);

    // Log some stuff
    await log("* Using database file: " + config.database);
    await log("* Using port: " + config.port);
    await log("* Running at " + config.tps + " TPS");

    // Save the config to a global variable
    global._expandy.config = config;
    global._expandy.instance = instanceID;
    global._expandy.log = log;

    // Open database
    await log("Opening database...");
    global._expandy.db = new Database(global._expandy.config.database);

    // Start server
    await log("Starting servers...");
    let app = Express();
    let server = http.createServer(app);
    let io = Socketio.listen(server);

    server.listen(global._expandy.config.port);

    // Load modules
    await log("Now loading modules...");
    let fileList = await fs.readdir(path.join(global._expandy.cwd, "expandy_modules"));

    // Go over all modules
    for (let i = 0; i < fileList.length; i++) {
        let expmod = require(path.join(global._expandy.cwd, "expandy_modules", fileList[i])); // Load into memory
        if (expmod.info.name && expmod.info.author)
            await log("Loading " + expmod.info.name + " by " + expmod.info.author);
        else
            await log("Loading " + fileList[i]);

        if (expmod.onload) // Run startup
            expmod.onload();

        if (expmod.routes) { // Define express routes
            if (expmod.routes.get) { // GET
                for (let k in expmod.routes.get) {
                    app.get(k, expmod.routes.get[k]);
                }
            }
            if (expmod.routes.post) { // POST
                for (let k in expmod.routes.post) {
                    app.post(k, expmod.routes.post[k]);
                }
            }
        }

        if (expmod.socket) { // SocketIO
            for (let k in expmod.socket) {
                if (!sockEvents[k]) sockEvents[k] = [];
                sockEvents[k].push(expmod.socket[k]);
            }
        }

        if (expmod.update) // Define the update event;
            updateEvents.push(expmod.update);

        await log("Loaded");
    }

    await log("Done loading all modules!");

    // Define all socket.io event listeners
    await log("Starting socket event listeners");

    io.on('connection', (socket) => {
        socket.id = uuid.v1();

        for (let k in sockEvents) {
            let x = new Msg(k, socket);
            socket.on(k, x.run.bind(x));
        }
    });

    // Start event loop
    await log("Starting event loop");

    setInterval(function() {
        for (let i = 0; i < updateEvents.length; i++) {
            updateEvents[i]();
        }
    }, 1000 / _expandy.config.tps);
})();