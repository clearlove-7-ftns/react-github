import axios from 'axios';

//设置baseURL
axios.defaults.baseURL = `http://localhost:8000`;
//登录

export const loginApi = (params)=> axios.post(`/login`,params)
/* 
获取房产列表
*/
export const getHouseListApi = ()=>axios.get(`/getHouseList`)


