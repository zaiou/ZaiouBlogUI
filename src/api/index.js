import Vue from 'vue';
//引入axios
import Axios from 'axios'

// 通过process.env.NODE_ENV配置开发还是线上环境
console.log(process.env.NODE_ENV);

let path = (process.env.NODE_ENV === "development")
    ?"http://localhost:8088/"
    :"/api/";

let getApiUrl = (apiName)=>{
    return path + apiName
};

export default {
    //接口名字和接口参数 
    get:(apiName="",params={})=>{
        let apiUrl = getApiUrl(apiName);
        Axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型
        return Axios.get(apiUrl,{params:params}).then((e)=>{
            return e.data;
        });
    },
    
    
    // post:(apiName="",body={})=>{
    //     let apiUrl = getApiUrl(apiName);
    //     console.log(apiUrl)
    //     return Vue.http.post(apiUrl,body).then((e)=>{
    //         return e.data;
    //     });
    // }
};