const con = require("../database/appDatabase");

const getTutorials = async (req, res) => {
  const q = "SELECT * FROM tutorials";
  con.query(q, (err, result) => {
    if (err) throw err;
    return res.json(result);
  });
};

const getTutorial = async (req, res) => {
  const q = "SELECT * FROM tutorials WHERE id = ?";
  con.query(q, [req.params.id], (err, result) => {
    if (err) return res.status(400).json(err);
    if (result.length === 0) return res.status(404).json("User not found");
    return res.json(result[0]);
  });
};

const postTutorial = async (req, res) => {
  const q =
    "INSERT INTO tutorials (`title`, `description`, `status`) VALUES (?)";
  const values = [[req.body.title, req.body.description, req.body.status]];
  con.query(q, values, (err, result) => {
    if (err) return res.status(400).json(err);
    return res.json(result);
  });
};

module.exports = {
  getTutorials,
  getTutorial,
  postTutorial,
};
