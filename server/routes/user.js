const express = require("express");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const db = require("../db");
const utils = require("../utils");
const secret = require("../secret");

const router = express.Router();

const app = express();
app.use(express.json());

router.post("/register", (req, res) => {
  try {
    const statement =
      "insert into user (fullName, email, phoneNumber, password) values (?,?,?,?);";

    const { fullName, email, phoneNumber, password } = req.body;

    const encryptedPassword = String(crypto.SHA256(password));

    db.pool.execute(
      statement,
      [fullName, email, phoneNumber, encryptedPassword],
      (err, result) => {
        if (err) {
          res.send(utils.createErrorResult(err));
        }
        res.send(utils.createSuccessResult(result));
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", (request, response) => {
  const { email, password } = request.body;
  const statement =
    "select id, fullName, email, phoneNumber, isDeleted from user where email=? and password=?;";

  const encryptedPassword = String(crypto.SHA256(password));
  db.pool.execute(statement, [email, encryptedPassword], (err, result) => {
    if (err) {
      response.send(utils.createErrorResult(err));
    } else {
      if (result.length == 0) {
        response.send(utils.createErrorResult("User does not exist"));
      } else {
        const user = result[0];
        if (user.isDeleted == 1) {
          response.send(utils.createErrorResult("User has been deleted"));
        } else {
          // For JWT
          const payload = { id: user.id };

          // creating JWT Token
          const token = jwt.sign(payload, secret.JWT_Secret);

          const userData = {
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            phoneNumber: user.phoneNumber,
            token: token,
          };
          response.send(utils.createSuccessResult(userData));
        }
      }
    }
  });
});

module.exports = router;
