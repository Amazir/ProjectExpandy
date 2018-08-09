const Router = require("express").Router;

let router = Router();

router.get("/all", (req, res) => {
    res.set("Content-Type", "application/json");
    res.send({
        "audio":{},
        "maps":{},
        "sprites":{},
        "tiles":{}
    })
});

module.exports = router;