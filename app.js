import express from "express";
import employees from "./db/employees.js";

const app = express();

// GET /
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET /employees
app.get("/employees", (req, res) => {
  res.send(employees);
});

// GET /employees/random
// This route must come before /employees/:id
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee);
});

// GET /employees/:id
app.get("/employees/:id", (req, res) => {
  const id = Number(req.params.id);

  const employee = employees.find((employee) => {
    return employee.id === id;
  });

  if (!employee) {
    return res.status(404).send("Employee not found.");
  }

  res.send(employee);
});

export default app;