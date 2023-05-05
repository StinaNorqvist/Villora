const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/api/favorite", async (req, res) => {
  let sql = "SELECT * FROM favorites";
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

router.get("/api/favorite/:id", async (req, res) => {
  let sql = "SELECT * FROM favorite WHERE favoriteId = ?";
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

router.post("/api/favorite", async (req, res) => {
  let sql = "INSERT INTO favorites (favoriteUID, favoriteHID) VALUES (?,?)";
  let params = [req.body.favoriteUID, req.body.favoriteHID];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "You successfully added a new favorite!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/api/favorite", async (req, res) => {
  let sql =
    "UPDATE favorites SET favoriteUID = ?, favoriteHID = ? WHERE favoriteId = ?";
  let params = [
    req.body.favoriteUID,
    req.body.favoriteHID,
    req.body.favoriteId,
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

router.delete("/api/favorite", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM favorites WHERE favoriteId = ?";

  try {
    await connection.query(
      sql,
      [req.body.favoriteId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Favorite is now deleted!",
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

// delete house and favorite

router.delete("/api/delete", async (req, res) => {
  console.log(req.body);

  let sqlFavorite = "DELETE FROM favorites WHERE favoriteHID = ?";

  try {
    await connection.query(
      sqlFavorite,
      [req.body.favoriteHID],
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

  let sqlHouse = "DELETE FROM house WHERE houseId = ?";

  try {
    await connection.query(
      sqlHouse,
      [req.body.houseId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "House is now deleted!",
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

router.get("/api/favorite-list", async (req, res) => {
  let sql = `SELECT userName, houseName
  FROM user
  INNER JOIN favorites ON userId = favoriteUID
   JOIN house ON  houseId = favoriteHID`;
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

// GET http://localhost:3000/api/favorite-count/1
router.get("/api/favorite-count/:id", async (req, res) => {
  let sql = `SELECT COUNT(*) AS countFavorites
  FROM favorites
  INNER JOIN user u on favorites.favoriteUID = u.userId
  INNER JOIN house h on favorites.favoriteHID = h.houseId
  WHERE houseId = ?;`;

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

module.exports = router;
