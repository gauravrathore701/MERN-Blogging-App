const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const db = require("../db");
const secret = require("../secret");

const app = express();
app.use(express.json());

router.post("/insertblog", (request, response) => {
  const query = `insert into blogs (title, contents ,user_id, category_id ) values(?,?,?,?);`;

  const { title, contents, category_id, token } = request.body;
  const id = parseInt(category_id);

  const payload = jwt.verify(token, secret.JWT_Secret);

  db.pool.execute(
    query,
    [title, contents, payload["id"], id],
    (error, result) => {
      if (error) {
        response.send({ status: "error", data: error });
      } else {
        //response.send('inserted a record')
        response.send({ status: "Success", data: result });
      }
    }
  );
});

router.get("/allblogs", (request, response) => {
  const query = `select blogs.title, user_id id,categories.title category from blogs,categories where blogs.category_id=categories.id;`;

  db.pool.execute(query, (err, result) => {
    if (err) {
      response.send({ status: "Error", data: err });
    } else {
      response.send({ status: "Success", data: result });
    }
  });
});

router.post("/myblogs", (request, response) => {
  const query = `select blogs.id id, blogs.title ,categories.title category from blogs,categories where blogs.category_id=categories.id and user_id = ?;`;

  const tokens = request.body.token;
  const payload = jwt.verify(tokens, secret.JWT_Secret);

  db.pool.execute(query, [payload["id"]], (err, result) => {
    if (err) {
      response.send({ status: "Error", data: err });
    } else {
      response.send({ status: "Success", data: result });
    }
  });
});

router.post("/searchblogs", (request, response) => {
  const { fullName } = request.body;
  const query = `select id, title, contents from blogs where user_id = (select id from user  where fullName = ?);`;

  db.pool.execute(query, [fullName], (err, result) => {
    if (err) {
      response.send({ status: "Error", data: err });
    } else {
      response.send({ status: "Success", data: result });
    }
  });
});

router.post("/edit/searchblogs", (request, response) => {
  const { id } = request.body;
  const query = `select id, title, contents from blogs where id=?;`;

  db.pool.execute(query, [id], (err, result) => {
    if (err) {
      response.send({ status: "Error", data: err });
    } else {
      response.send({ status: "Success", data: result });
    }
  });
});

router.post("/deleteblog", (request, response) => {
  const { id } = request.body;
  const query = `delete from blogs where id=?;`;

  db.pool.execute(query, [id], (err, result) => {
    if (err) {
      response.send({ status: "Error", data: err });
    } else {
      response.send({ status: "Success", data: result });
    }
  });
});

router.post("/blogbyid", (req, res) => {
  const { blogId } = req.body;
  const statement = "select title, contents from blogs where id = ? ;";

  db.pool.execute(statement, [blogId], (err, result) => {
    if (err) {
      res.send({ status: "Error", data: err });
    } else {
      res.send({ status: "Success", data: result });
    }
  });
});

router.post("/updateblog", (req, res) => {
  const { title, contents, category_id, blogId } = req.body;

  const statement =
    "update blogs set title = ?,contents = ?,category_id = ? where id = ?;";

  db.pool.execute(
    statement,
    [title, contents, category_id, blogId],
    (err, result) => {
      if (err) {
        res.send({ status: "Error", data: err });
      } else {
        res.send({ status: "Success", data: result });
      }
    }
  );
});

module.exports = router;
