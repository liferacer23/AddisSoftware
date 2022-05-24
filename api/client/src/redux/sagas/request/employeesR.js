import axios from "axios";

export const requestGetEmployees=()=>{
return axios.request({
    method:"get",
    url:"/employee"
});

}
export const requestCreateEmployee=(action)=>{
return axios.request({
    method:"post",
    url:"/employee",
    data:action.value
});

}