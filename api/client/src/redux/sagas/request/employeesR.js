import axios from "axios";

export const requestGetEmployees=()=>{
return axios.request({
    method:"get",
    url:"https://addisemployees.herokuapp.com/api/employee"
});

}
export const requestCreateEmployee=(action)=>{
return axios.request({
    method:"post",
    url:"https://addisemployees.herokuapp.com/api/employee",
    data:action.emoployee
});

}