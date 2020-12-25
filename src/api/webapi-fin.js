import {GetHttp,GetHttp_Net} from "../utils/http"
//获取收款
export function getAll(pa) {
  pa = Object.assign(pa,{method:'getall'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//获取收款单个对象
export function getByID(pa) {
  pa = Object.assign(pa,{method:'getByid'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//添加收款
export function addCollection(pa) {
  pa = Object.assign(pa,{method:'add_fin_collection'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//修改收款
export function updateCollection(pa) {
  pa = Object.assign(pa,{method:'update_fin_collection'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//完善退款
export function complateDrawback(pa) {
  pa = Object.assign(pa,{method:'update_fin_drawback'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//删除收款
export function delCollection(pa) {
  pa = Object.assign(pa,{method:'update_fin_collection'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//添加退款
export function addDrawback(pa) {
  pa = Object.assign(pa,{method:'add_fin_drawback'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//添加收款明细
export function addCollectionList(pa) {
  pa = Object.assign(pa,{method:'add_fin_collectionlist'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//修改收款明细
export function updateCollectionList(pa) {
  pa = Object.assign(pa,{method:'update_fin_collectionlist'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//得到项目信息
export function getProject(pa) {
  return GetHttp("java_post", "pro/cmbaseproject/findall", "post", pa);
}
//更新报销申请信息{tableName,method,jsonData}
export function updateShareReimebursement(pa) {
  return GetHttp("back_post", "updateShareReimebursement", "post", pa);
}
//添加开票信息
export function addBill(pa) {
  pa = Object.assign(pa,{method:'add_fin_billinfo'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//修改开票信息
export function updateBill(pa) {
  pa = Object.assign(pa,{method:'update_fin_billinfo'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//获取所有开票信息
export function getAllBill(pa) {
  pa = Object.assign(pa,{method:'select_fin_bill'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}
//添加开票登记信息collectionlistId
export function addConllBill(pa) {
  pa = Object.assign(pa,{method:'add_fin_collection_bill'});
  return GetHttp_Net("back_post", "/fin", "post", pa);
}