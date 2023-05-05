const express = require('express')
const connection = require('../connection')
const router = express.Router()


router.get("/api/house-material", async (req, res) => {
    let sql = "SELECT * FROM houseMaterial";
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
  
router.get("/api/house-material/:id", async (req, res) => {
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
  
  router.post("/api/house-material", async (req, res) => {
    let sql =
      "INSERT INTO houseMaterial (houseMaterialHID, houseMaterialMID) VALUES (?,?)";
    let params = [
      req.body.houseMaterialHID,
      req.body.houseMaterialMID,
    ];
  
    try {
      await connection.query(sql, params, function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "You successfully added a material to a house!",
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });
  
  router.put("/api/house-material", async (req, res) => {
    let sql =
      "UPDATE houseMaterial SET houseMaterialHID = ?, houseMaterialMID = ? WHERE houseMaterialId = ?";
    let params = [
      req.body.houseMaterialHID,
      req.body.houseMaterialMID,
      req.body.houseMaterialId,
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
  
  module.exports = router;