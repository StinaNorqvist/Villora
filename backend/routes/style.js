const express = require('express')
const connection = require('../connection')
const router = express.Router()


router.get("/api/style", async (req, res) => {
    let sql = "SELECT * FROM style";
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

  router.get("/api/style/:id", async (req, res) => {
    let sql = "SELECT * FROM style WHERE styleId = ?";
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


  router.post("/api/style", async (req, res) => {
    let sql =
      "INSERT INTO style (styleName, styleDescription) VALUES (?,?)";
    let params = [
      req.body.styleName,
      req.body.styleDescription
    ];
  
    try {
      await connection.query(sql, params, function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "You successfully added a new style!",
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });

  router.put("/api/style/", async (req, res) => {
    let sql =
      "UPDATE style SET styleName = ?, styleDescription = ? WHERE styleId = ?";
    let params = [
      req.body.styleName,
      req.body.styleDescription,
      req.body.styleId
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

  router.delete("/api/style", async (req, res) => {
    console.log(req.body);
    let sql = "DELETE FROM style WHERE styleId = ?";
  
    try {
      await connection.query(
        sql,
        [req.body.styleId],
        function (error, results, fields) {
          if (error) {
            if (error) throw error;
          }
          return res.status(201).json({
            success: true,
            error: "",
            message: "Style is now deleted!",
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

  module.exports = router