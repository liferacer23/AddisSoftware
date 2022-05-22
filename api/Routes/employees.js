import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmpolyees,
  updateEmployee,
} from "../Controllers/employeeController.js";
import Employee from "../Models/employee.js";
const router = express.Router();

//Create employee

router.post("/", createEmployee);

//Get employees

router.get("/", getEmpolyees);

//update employee

router.put("/:id", updateEmployee);

//delete employee

router.delete("/:id", deleteEmployee);

export default router;
