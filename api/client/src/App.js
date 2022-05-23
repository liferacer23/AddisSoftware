import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "./redux/ducks/employee";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEmployee());
  }, []);
  const employees = useSelector((state) => state.employees.employees);

  console.log(employees);
 return (
   <div>
     {employees && employees.map((data,index)=>{
       return(
         <div key={index}>
           <h1>{data.Name}</h1>
         </div>
       )
     })}
   </div>
 )
}

export default App;
