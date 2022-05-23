export const GET_EMPLOYEES = 'GET_EMPLOYEES';
const SET_EMPLOYEES = 'SET_EMPLOYEES';

export const getEmployee= ()=>({
    type:GET_EMPLOYEES
});
export const setEmployee = (employees)=>({
    type:SET_EMPLOYEES,
    employees:employees 
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
        default:
            return state
    }
};