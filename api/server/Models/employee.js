import mongoose from "mongoose";
const { Schema } = mongoose;

const EmployeeSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
      unique:true
    },
    Gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    Salary: {
      type: Number,
      required: true,
    },
    DateOfBirth: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema);
