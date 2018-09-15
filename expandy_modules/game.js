const path = require("path");

module.exports.info = {
    "name":"MainGameServer",
    "author":"AmaziR"
};

module.exports.onload = function() {
    _expandy.log("Matka tomka")
};

module.exports.routes = {
    get: {
        "/": function(req, res) {
            res.sendFile(path.join(_expandy.cwd, "gameclient", "index.html"));
        }
    }
};

module.exports.socket = {};
module.exports.socket["test"] = function(data, socket) {
    _expandy.log(data);
};