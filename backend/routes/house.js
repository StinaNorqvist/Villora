const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/api/house", async (req, res) => {
  let sql = "SELECT * FROM house";
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

router.get("/api/house/:id", async (req, res) => {
  let sql = "SELECT * FROM house WHERE houseId = ?";
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

router.post("/api/house", async (req, res) => {
  let sql =
    "INSERT INTO house (houseName, housePrice, houseFloors, houseSquareFeet, houseBedrooms, houseBathrooms, houseStyle) VALUES (?,?,?,?,?,?,?)";
  let params = [
    req.body.houseName,
    req.body.housePrice,
    req.body.houseFloors,
    req.body.houseSquareFeet,
    req.body.houseBedrooms,
    req.body.houseBathrooms,
    req.body.houseStyle,
  ];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "You successfully added a new house!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/api/house", async (req, res) => {
  let sql =
    "UPDATE house SET houseName = ?, housePrice = ?, houseFloors = ?, houseSquareFeet = ?, houseBedrooms = ?, houseBathrooms = ?, houseStyle = ? WHERE houseId = ?";
  let params = [
    req.body.houseName,
    req.body.housePrice,
    req.body.houseFloors,
    req.body.houseSquareFeet,
    req.body.houseBedrooms,
    req.body.houseBathrooms,
    req.body.houseStyle,
    req.body.houseId,
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

router.delete("/api/house", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM house WHERE houseId = ?";

  try {
    await connection.query(
      sql,
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

// Inner Join: Shows houses and their styles
router.get("/api/house/styles", async (req, res) => {
  let sql =
    "SELECT * FROM house INNER JOIN style ON house.houseStyle = style.styleID";
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

// Inner Join: Shows houses and their materials
router.get("/api/house/materials", async (req, res) => {
  let sql =
    "SELECT * FROM houseMaterial INNER JOIN house ON house.houseId = houseMaterial.houseMaterialHID INNER JOIN material ON material.materialId = houseMaterial.houseMaterialMID";
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

// Inner Join: Shows houses, their styles and their materials
router.get("/api/house/materials-styles", async (req, res) => {
  let sql =
    "SELECT * FROM houseMaterial INNER JOIN house ON house.houseId = houseMaterial.houseMaterialHID INNER JOIN material ON material.materialId = houseMaterial.houseMaterialMID INNER JOIN style ON house.houseStyle = style.styleId";

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

module.exports = router;
