var express = require("express");
var appointmentControle = require("../db/controllers/appointmentControle.js");

var router = express.Router();

router.route("/").post(function(req, res) {
  appointmentControle.create(req.body, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/").get(function(req, res) {
  appointmentControle.read((err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.route("/:id").delete((req, res) => {
  console.log(req.params.id);
  appointmentControle.delete(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

module.exports = router;