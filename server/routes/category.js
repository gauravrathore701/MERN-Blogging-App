const express = require("express");
const router = express.Router();

const db = require("../db");

const app = express();

app.use(express.json());

// SHOW  ALL CATEGORY
router.get("/allcategories", (request, response) => {
  const query = `select id , title , description  from categories;`;

  const res = db.pool.execute(query, (err, result) => {
    response.send({ status: "Success", data: result });
  });
});

// ADD CATEGORY
router.post("/addcategory", (request, response) => {
  const { title, description } = request.body;
  const query = `insert into categories(title,description) values(?,?);`;

  const res = db.pool.execute(query, [title, description], (err, result) => {
    response.send(result);
  });
});

module.exports = router;
