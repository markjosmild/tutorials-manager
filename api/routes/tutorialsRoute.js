const express = require("express");
const router = express.Router();
const {
  getTutorials,
  getTutorial,
  postTutorial,
} = require("../controllers/getTutorials");

router.get("/test", (req, res) => res.json("test2"));
router.get("/", getTutorials);
router.get("/:id", getTutorial);

router.post("/", postTutorial);

module.exports = router;
