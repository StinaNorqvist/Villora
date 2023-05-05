const express = require("express");
const connection = require("../connection");
const router = express.Router();

router.get("/api/order", async (req, res) => {
  let sql = "SELECT * FROM orders";
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

router.get("/api/order/:id", async (req, res) => {
  let sql = "SELECT * FROM orders WHERE orderId = ?";
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

router.post("/api/order", async (req, res) => {
  let sql = "INSERT INTO orders (orderUID, orderHID) VALUES (?,?)";
  let params = [req.body.orderUID, req.body.orderHID];

  try {
    await connection.query(sql, params, function (error, results, fields) {
      if (error) {
        if (error) throw error;
      }
      return res.status(201).json({
        success: true,
        error: "",
        message: "You successfully added a new order!",
      });
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put("/api/order", async (req, res) => {
  let sql = "UPDATE orders SET orderUID = ?, orderHID = ? WHERE orderId = ?";
  let params = [req.body.orderUID, req.body.orderHID, req.body.orderId];

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

router.delete("/api/order", async (req, res) => {
  console.log(req.body);
  let sql = "DELETE FROM orders WHERE orderId = ?";

  try {
    await connection.query(
      sql,
      [req.body.orderId],
      function (error, results, fields) {
        if (error) {
          if (error) throw error;
        }
        return res.status(201).json({
          success: true,
          error: "",
          message: "Order is now deleted!",
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
