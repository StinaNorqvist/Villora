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
  let sql = "SELECT * FROM user WHERE userId = ?";
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
  let sql = "INSERT INTO user (userName, userPhone, userMail) VALUES (?,?,?)";
  let params = [req.body.userName, req.body.userPhone, req.body.userMail];

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
    "UPDATE user SET userName = ?, userPhone = ?, userMail = ? WHERE userId = ?";
  let params = [
    req.body.userName,
    req.body.userPhone,
    req.body.userMail,
    req.body.userId,
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

module.exports = router;
