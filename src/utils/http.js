import req from "./ax";
import qs from "qs";
import req_Net from "./ax_Net";
let api = {};
if (process.env.NODE_ENV === 'production') { //生产环境
  api = {
    bpm: "http://dingtalk.gygkzh.com/main/",
    back_get: "http://182.43.223.185:8081/main/api/",
    back_post: "http://182.43.223.185:8081/main/api/",
    java_post: 'http://182.43.223.185:7777/hdpmwork/',
  }
} else { //开发环境
  api = {
    bpm: "http://dingtalk.gygkzh.com/main/", //cbpm http://dingtalk.gygkzh.com/main/doget/ http://localhost:61744/main/doget/
    back_get: 'http://localhost:63818/main/api/', //"http://182.43.223.185:8081", //pmis
    back_post: 'http://localhost:63818/main/api/', //"http://localhost:58541/main/dopost/" http://182.43.223.185:8089/
    java_post: 'http://182.43.223.185:8080/hdpmwork/',
  }
}

export function GetHttp(mods, url, method, params) {
  switch (mods) {
    case "bpm":
      req.defaults.baseURL = api.bpm;
      localStorage.setItem("lang", "net");

      break;
    case "back_get":
      req.defaults.baseURL = api.back_get;
      localStorage.setItem("lang", "net");

      break;
    case "back_post":
      req.defaults.baseURL = api.back_post;
      localStorage.setItem("lang", "net");
      break;
    case "java_post":
      req.defaults.baseURL = api.java_post;
      localStorage.setItem("lang", "java");
      break;
    default:
      req.defaults.baseURL = api.back;
      break;
  }

  let mypa = {
    url: url,
    method: method
  };
  if (params && method.toLowerCase() === "post") {
    mypa = {
      url: url,
      method: method,
      data: params,
      transformRequest: [function (data) {
        /** let ret = ''
         for (let it in data) {
           ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
         return ret*/
        return qs.stringify(data);
      }],
    };
  }
  //console.log(mypa);
  return new Promise((resolve, reject) => {
    req(mypa).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    })
  });
}

export function GetHttp_Net(mods, url, method, params) {
  switch (mods) {
    case "bpm":
      req_Net.defaults.baseURL = api.bpm;
      break;
    case "back_get":
      req_Net.defaults.baseURL = api.back_get;
      break;
    case "back_post":
      req_Net.defaults.baseURL = api.back_post;
      break;
    default:
      req_Net.defaults.baseURL = api.back;
      break;
  }

  let mypa = {
    url: url,
    method: method
  };
  if (params && method.toLowerCase() === "post") {
    mypa = {
      url: url,
      method: method,
      data: params,
      transformRequest: [function (data) {
        return qs.stringify(data);
      }],
    };
  }

  return new Promise((resolve, reject) => {
    req_Net(mypa).then(res => {
      resolve(res);
    }).catch(error => {
      reject(error);
    })
  });
}
