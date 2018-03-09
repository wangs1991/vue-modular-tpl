let Mock = require('mockjs');

/**
 * mock 常用防范说明 http://mockjs.com/examples.html
 * @integer(0, 1) 随机生成指定范围的正数
 * @id(18) 指定位数的数字串且唯一 适用于生成身份证号等唯一编号
 * @string(5, 15) 字符串
 * @ctitle(5, 12) 标题
 * @csentence(5, 20)  语句段落
 * @cword(2,4) 中文单词 可指定位数
 * @datetime('yyyy-mm-dd hh:mm:ss') 日期 可设置格式
 * @increment(1) 按指定步长自增
 */
module.exports = {
  getComment: Mock.mock({
    "code": 0,
    "message": "success",
    "data|10": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  }),
  getUserList: Mock.mock({
    "code": 0,
    "message": "success",
    "data": {
      total: 200,
      "list|20": [{
        'personName': "@cword(2,4)",
        'sex': "@integer(0, 1)",
        'personId': "@id(18)",
        'hospitalName': "@ctitle(5, 12)",
        'enterId': "@id(8, 8)",
        'diagnosisEnter': "@ctitle(5, 12)",
        'reason': "@csentence(5, 20)",
        'taskType': "@integer(0, 1)"
      }]
    }
  }),
  // 待采集任务列表
  getCollectList: Mock.mock({
    "code": 0,
    "message": "success",
    "data": {
      total: 200,
      "list|20": [{
        'personName': "@cword(2,4)",
        'sex': "@integer(0, 1)",
        'personId': "@id(18)",
        'hospitalName': "@ctitle(5, 12)",
        "enterDate": '@datetime(\'yyyy-mm-dd hh:mm:ss\')',
        'enterId': "@id(8, 8)",
        'authDateStart': "@datetime('yyyy-mm-dd hh:mm:ss')",
        'authDateEnd': "@datetime('yyyy-mm-dd hh:mm:ss')",
        'taskState': "@integer(0, 1)"
      }]
    }
  }),
  // 设备列表
  getDevicesList: Mock.mock({
    "code": 0,
    "message": "success",
    "data": {
      total: 20,
      "list|5": [{
        'equipmentId': "@string(9)",
        'hospitalName': "@cword(2, 8)",
        'name': "@cword(2, 8)",
        'apkServerUrl': "@url()",
        'apkServerName': "@string(5, 15)",
        'giveAgency': "@ctitle(5, 12)",
        'giveDate': "@datetime('yyyy-mm-dd hh:mm:ss')",
        'userName': "@cword(2,4)",
        'state': "@integer(0, 2)"
      }]
    }
  }),
  getAuthHospital: Mock.mock({
    "code": 0,
    "message": "success",
    "data": {
      total: 20,
      "list|5": [{
        'hospital': "@ctitle(5, 12)",
        'failed': "@integer(0, 2000)",
        'unabled': "@integer(0, 2000)"
      }]
    }
  }),
  // 用户列表
  getUserManageList: Mock.mock({
    "code": 0,
    "message": "success",
    "data": {
      total: 20,
      "list|20": [{
        "id": "@increment(1)",
        'roleId': "@integer(0, 1)",
        'userName': "@cword(2,4)",
        'personName': "@cword(2,4)",
        "agency": "@cword(6,12)",
        "departmentName": "@cword(3,6)",
        "departmentId": "@integer(0, 100)",
        "avaliable": "@integer(0, 1)",
        "creater":  "@cword(8,10)",
        "createTime": "@datetime('yyyy-mm-dd')",
        'phone': "@string(11)"
      }]
    }
  })
};
