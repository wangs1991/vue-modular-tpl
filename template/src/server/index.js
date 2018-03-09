import axios from 'axios';
import qs from 'qs';
import toast from '@/components/toast/toast';
import modal from '@/components/confirm/Modal';

/* eslint-disable */
require('es6-promise').polyfill();
/* eslint-enable */

let Promise;

Promise = Promise || window.Promise;

function localData(key, val, del) {

  return new Promise((resolve, reject) => {
    var res;

    if (key && val) {
      if (typeof val === 'object') {
        val = JSON.stringify(val);
      }
      console.log('set', key);
      window.localStorage.setItem(key, val);
      resolve(true, key, val);
    } else if (key && del) {
      console.log('remove', key);
      window.localStorage.removeItem(key);
      resolve(true);
    } else if (key) {
      res = window.localStorage.getItem(key);

      if (res) {
        resolve(res);
      } else {
        reject(res);
      }
    }
  });
}

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.responseType = 'json';
// axios.defaults.baseURL = 'http://localhost:8099/';


//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  toast({
    message: error
  });
  return Promise.reject(error);
});

//返回状态判断
// 返回状态截获
axios.interceptors.response.use((res) => {
  if (res.data.code === 10002){
    // 强制退出
    localData('token', '', true);
    localData('id', '', true);
    modal({
      message: '登录过期，请重新登录',
      confirm: function () {
        this.close();
        window.location.href = window.location.href.split('#')[0];
      },
      confirmLabel: '重新登录',
      buttons: 1
    });
    return Promise.reject(res);
  }else if(res.data.code != 0) {
    toast({
      message: res.data.msg || '网络错误'
    });
    return Promise.reject(res);
  }
  return Promise.resolve(res);
}, (error) => {
  toast({
    message: '网络错误'
  });
  return Promise.reject(error);
});

let fetch = (function () {
  // let reqCache = [];

  return function (url, params = {}) {
    if(window.config.host){
      url = window.config.host+url;
    }
    localData('token').then(data => {
      params.token = data;
    }, data => { });
    localData('id').then(data => {
      params.id = data;
    }, data => { });
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
})();

export default {
  fetch,
  localData
};
