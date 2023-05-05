const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/api/material", async (req, res) => {
  let sql = "SELECT * FROM material";
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

router.get("/api/material/:id", async (req, res) => {
  let sql = "SELECT * FROM material WHERE materialId = ?";
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

router.post("/api/material", async (req, res) => {
  let sql = "INSERT INTO material (materialName) VALUES (?)";
  let params = [req.body.materialName];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "You successfully added a new material!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/api/material", async (req, res) => {
  let sql = "UPDATE material SET materialName = ? WHERE materialId = ?";
  let params = [req.body.materialName, req.body.materialId];

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

// FUNGERAR EJ
router.delete("/api/material", async (req, res) => {
  console.log(req.body);

  let sqlHouseMaterial = "DELETE FROM houseMaterial WHERE houseMaterialMID = ?";

  try {
    await connection.query(
      sqlHouseMaterial,
      [req.body.houseMaterialMID],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "HouseMaterial connection is now deleted!",
        });
      }
    );
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }


  let sql = "DELETE FROM material WHERE materialId = ?";

  try {
    await connection.query(
      sql,
      [req.body.materialId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Material is now deleted!",
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
