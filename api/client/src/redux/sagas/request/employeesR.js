import axios from "axios";

export const requestGetEmployees=()=>{
return axios.request({
    method:"get",
    url:"/employee"
});

}