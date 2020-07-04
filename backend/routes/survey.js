const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

router.get("/", (req, res) => {
  Survey.find()
    .then((survey) => res.json(survey))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const age = req.body.age;
  const country = req.body.country;
  const gender = req.body.gender;

  const newSurvey = new Survey({ username, age, country, gender });

  newSurvey
    .save()
    .then(() => res.json("Survey Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Survey.findById(req.params.id)
    .then((survey) => res.json(survey))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Survey.findByIdAndDelete(req.params.id)
    .then(() => res.json("Survey Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  Survey.findById(req.params.id)
    .then((survey) => {
      survey.username = req.body.username;
      survey.age = req.body.age;
      survey.country = req.body.country;
      survey.gender = req.body.gender;

      survey
        .save()
        .then(() => res.json("Survey Updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
