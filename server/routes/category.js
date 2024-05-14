const express = require("express");
const router = express.Router();

const db = require("../db");
const { createResult } = require("../utils");

const app = express();

app.use(express.json());

// SHOW  ALL CATEGORY
router.get("/allcategories", (request, response) => {
  const query = `select id , title , description  from categories;`;

  db.pool.execute(query, (err, result) => {
    response.send(createResult(err, result));
  });
});

// ADD CATEGORY
router.post("/addcategory", (request, response) => {
  const { title, description } = request.body;
  const query = `insert into categories(title,description) values(?,?);`;

  db.pool.execute(query, [title, description], (err, result) => {
    response.send(createResult(err, result));
  });
});

// Delete Category
router.post("/deletecategory", (req, res) => {
  const { category_id } = req.body;

  const statement = "delete from categories where id = ?;";
  db.pool.execute(statement, [category_id], (err, result) => {
    res.send(createResult(err, result));
  });
});

module.exports = router;
