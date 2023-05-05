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

router.get("/api/order-list", async (req, res) => {
  let sql = `SELECT userName, houseName
FROM user
INNER JOIN orders on user.userId = orderUID
INNER JOIN house on orderHID = houseId`;

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

// GET http://localhost:3000/api/order-count/1
router.get("/api/order-count/:id", async (req, res) => {
  let sql = `SELECT COUNT(*) AS countOrders FROM user
  INNER JOIN orders o on user.userId = o.orderUID
  WHERE userId = ?;`;

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
