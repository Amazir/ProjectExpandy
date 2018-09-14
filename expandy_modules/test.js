module.exports.info = {
    "name":"example",
    "author":"Rph"
};

module.exports.onload = function() {
    _expandy.log("Hello from example module :)")
};

module.exports.routes = {get:{}};

module.exports.routes.get["/"] = function(req, res) {
    res.send(">:(");
};

module.exports.socket = {};
module.exports.socket["test"] = function(data, socket) {
    _expandy.log(data);
};

module.exports.update = function() {
    _expandy.log("Tick");
};