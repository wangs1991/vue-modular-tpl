import axios from 'axios';
import qs from 'qs';
import toast from '@/components/toast/toast';
import APP from '../main';

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
      window.localStorage.setItem(key, val);
      resolve(true, key, val);
    } else if (key && del) {
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
};

// axios 配置
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json;';
axios.defaults.headers['X-Request-With'] = 'XMLHttpRequest';    // ajax请求方式
axios.defaults.responseType = 'json';

function setToken (token) {
  axios.defaults.headers.token = token;
}

//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
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
  if (res.data.code === 401){
    // 强制退出
    localData('token', '', true);
    setToken('');
    toast({
      message: '登录过期，请重新登录'
    });
    // window.location.href = '/';
    try{
      APP.$close(false);
    }catch(e){}
    APP.$router.push('/login');
    return Promise.reject(res);
  }else if(res.data.code !== 0) {
    toast({
      message: res.data.msg || '网络错误'
    });
    return Promise.reject(res.data);
  }
  return Promise.resolve(res.data);
}, (error) => {
}, (error) => {
  toast({
    message: '网络错误'
  });
  return Promise.reject(error);
});

let fetch = (function () {
  return function (url, params = {}) {
    if(window.config.host){
      url = window.config.host+url;
    }
    return new Promise((resolve, reject) => {
      params = JSON.stringify(params);
      APP.$store.commit('loading', true);
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
          APP.$store.commit('loading', false);
        }, err => {
          reject(err);
          APP.$store.commit('loading', false);
        })
        .catch((error) => {
          reject(error);
          APP.$store.commit('loading', false);
        });
    });
  };
})();

export default {
  fetch,
  localData,
  setToken
};
export {
  localData
};
