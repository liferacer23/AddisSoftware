import Employee from '../Models/employee.js';

//Create employee
export const createEmployee = async (req, res) => {
  const newEmployee = new Employee(req.body);
  try {
    const createdEmployee = await newEmployee.save();
    res.status(200).json(createdEmployee);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Get employees
export const getEmpolyees = async (req, res) => {
  try {
    const allEmployees = await Employee.find();
    res.status(200).json(allEmployees);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update employee

export const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json(err);
  }
};

//delete employee

export const deleteEmployee = async (req,res)=>{
    try {
        const employee = await Employee.findByIdAndDelete(
          req.params.id
        );
        res.status(200).json(`Employee ${employee.Name} has been deleted`);
      } catch (err) {
        res.status(500).json(err);
      }
}
