// controllers/taskController.js
const task = require("../models/taskModels");

// Get api and task
const getApiandTask = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Tasks retrieved successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


// Add a new task
const addApiandTask = async (req, res) => {
  try {
    const newTask = req.body;
    task.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: task });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Update a task
const updateApiandTaskById= async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task[index] = { ...task[index], ...req.body };
      res
        .status(200)
        .json({ message: "Task updated successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

// Delete task
const deleteApiandTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((task) => task.id === id);
    if (index !== -1) {
      task.splice(index, 1);
      res
        .status(200)
        .json({ message: "Task deleted successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getApiandTask,
  addApiandTask,
  updateApiandTaskById,
  deleteApiandTaskById,
};