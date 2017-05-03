var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
	res.render("author",{title: "creditos", header: "creditos"})
});

module.exports = router;

