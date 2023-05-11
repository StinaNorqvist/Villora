const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/api/user", async (req, res) => {
  let sql = "SELECT * FROM user";
  try {
    await connection.query(sql, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      res.json(results);
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.get("/api/user/:id", async (req, res) => {
  let sql = "SELECT * FROM user WHERE userName = ?";
  try {
    await connection.query(
      sql,
      [req.params.id],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        res.json(results);
      }
    );
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/api/user", async (req, res) => {
  let sql =
    "INSERT INTO user (userName, userPhone, userMail, userPassword) VALUES (?,?,?,?)";
  let params = [
    req.body.userName,
    req.body.userPhone,
    req.body.userMail,
    req.body.userPassword,
  ];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "You successfully added a new user!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/api/user", async (req, res) => {
  let sql =
    "UPDATE user SET userName = ?, userPhone = ?, userMail = ?, userPassword = ? WHERE userId = ?";
  let params = [
    req.body.userName,
    req.body.userPhone,
    req.body.userMail,
    req.body.userId,
    req.body.userPassword,
  ];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.delete("/api/user", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM user WHERE userId = ?";

  try {
    await connection.query(
      sql,
      [req.body.userId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "User is now deleted!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// delete user, first deleting favorite & order

router.delete("/api/user-delete", async (req, res) => {
  console.log(req.body);

  let sqlFavorite = "DELETE FROM favorites WHERE favoriteUID = ?";

  try {
    await connection.query(
      sqlFavorite,
      [req.body.favoriteUID],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }

  let sqlOrder = "DELETE FROM orders WHERE orderUID = ?";

  try {
    await connection.query(
      sqlOrder,
      [req.body.orderUID],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
  let sqlUser = "DELETE FROM user WHERE userId = ?";

  try {
    await connection.query(
      sqlUser,
      [req.body.userId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "User is now deleted!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// LOGIN FUNCTION

router.post("/auth", function (request, response) {
  // Capture the input fields
  let userName = request.body.userName;
  let userPassword = request.body.userPassword;
  // Ensure the input fields exist and are not empty
  if (userName && userPassword) {
    // Execute SQL query that'll select the account from the database based on the specified username and password
    connection.query(
      "SELECT * FROM user WHERE userName = ? AND userPassword = ?",
      [userName, userPassword],
      function (error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) {
          console.log("error");
          console.error(error);
          response.status(500).send("Internal Server Error");
          return;
        }
        // If the account exists
        if (results.length > 0) {
          console.log("funkar att logga in");
          // Authenticate the user
          request.session.loggedin = true;
          request.session.username = userName;
          console.log(request.session.username, "hej välkommen");
          // Redirect to home page
          response.status(200).json({ success: true });
        } else {
          console.log("fel lösen");
          response
            .status(401)
            .json({ error: "Incorrect Username and/or Password!" });
        }
      }
    );
  } else {
    response.status(400).json({ error: "Please enter Username and Password!" });
  }
});
module.exports = router;
