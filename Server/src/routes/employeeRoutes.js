// employeeRoutes.js
const express = require("express");
const router = express.Router();

// Sample employee data
const employees = [
  { id: 1, name: "Asad Atiq", position: "Manager" },
  { id: 2, name: "Jane Smith", position: "Developer" },
  { id: 3, name: "Jhon Doe", position: "QA" },
];

// Get all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// Add a new employee
router.post("/", (req, res) => {
  const { name, position } = req.body;
  const newEmployee = { id: employees.length + 1, name, position };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

module.exports = router;
