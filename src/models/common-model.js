import apiConfig from '../config/api-config'
import $http from '../util/api-util'

// 消费记录
function expenseRecordHttp(params, successCallback, failCallback) {
  let api = apiConfig.expenseRecord
  $http(api, params, function (res) {
    successCallback(res)
  })
}

// 服务记录
function serveRecordHttp(params, successCallback, failCallback) {
  let api = apiConfig.serveRecord
  $http(api, params, function (res) {
    successCallback(res)
  })
}

export {
  expenseRecordHttp,
  serveRecordHttp
}
