import {GetHttp,GetHttp_Net} from "../utils/http"

export function getAll(pa) {
  return GetHttp("java_post", "/sys/currentstamp/findall", "post", pa);
}

//添加盖章申请信息
export function add(pa) {
  return GetHttp("java_post", "/sys/currentstamp/add", "post", pa);
}
//获得费用报销信息pa={page,limit,where}
export function getShareReimubursement(pa) {
  return GetHttp_Net("back_post", "getShareReimubursement", "post", pa);
}
//添加报销申请信息
export function addShareReimebursement(pa) {
  return GetHttp_Net("back_post", "addShareReimebursement", "post", pa);
}
//更新报销申请信息{tableName,method,jsonData}
export function updateShareReimebursement(pa) {
  return GetHttp_Net("back_post", "updateShareReimebursement", "post", pa);
}