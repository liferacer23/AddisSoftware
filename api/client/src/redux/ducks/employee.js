export const GET_EMPLOYEES = 'GET_EMPLOYEES';
 const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const CREATE_EMPLOYEE= 'CREATE_EMPLOYEE';

export const getEmployee= ()=>({
    type:GET_EMPLOYEES
});
export const setEmployee = (employees)=>({
    type:SET_EMPLOYEES,
    employees:employees 
});
export const addEmployee = (employee)=>({
    type:CREATE_EMPLOYEE,
    employee:employee 
});

const initialState = {
    employees:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState,action)=>{
    switch(action.type){
         case SET_EMPLOYEES:
             const {employees} = action;
            return{...state, employees:employees};
         case CREATE_EMPLOYEE:
             const {employee} = action;
            return state.employees.push(employee);
        default:
            return state
    }
};