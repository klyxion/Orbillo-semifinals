// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const {
  getApiandTask,
  addApiandTask,
  updateApiandTaskById,
  deleteApiandTaskById,
} = require("../controllers/taskControllers");

// Route definitions
router.get("/", getApiandTask);
router.post("/", addApiandTask);
router.put("/:id", updateApiandTaskById);
router.delete("/:id", deleteApiandTaskById);

module.exports = router;