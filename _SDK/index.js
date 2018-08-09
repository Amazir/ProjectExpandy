const Express = require("express");

const app = Express();
app.set("view engine", "ejs");

app.use("/static", Express.static("static"));
app.get("/", (req, res) => {
    res.render("main.ejs");
});
app.use("/api/project", require("./routers/project.js"));

app.listen(1444);