// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{#if_eq category "web-pc"}}
import "babel-polyfill";
{{/if_eq}}
import Vue from 'vue';
import App from './App';
import router from './router';
import Store from './store/index';

Vue.config.productionTip = false;

/**
 * @author 王帅
 * @function 初始化app并挂在到dom元素上
 */
let APP;

APP = new Vue({
  el: '#{{name}}',
  router,
  store: Store,
  components: { App },
  template: '<App/>',
  created() {
    /*// 用于登录后再其他页面刷新使用的判断
    Server.localData('token').then(data => {
      let that = this;

      // 检验token是否过期
      Server.setToken(data);
      setTimeout(function () {
        RouterMap.checkToken().then(res => {
          // 把用户说数据放到全局的store中
          that.$store.commit('initUser', res);
        }, err => {
          that.$router.replace('/login');
        });
      }, 10);
    }, data => {
      APP.$router.replace('/login');
    });*/
  }
});
  /**
   * url输入验证登录权限拦截
   */
/*// 检查当前跳转页面是否可以访问[除登陆外都不可访问]
APP.$router.beforeEach((to, from, next) => {
  // 路由匹配不到直接去404错误页
  if (to.matched.length < 1) {
    APP.$router.push('/');
    return false;
  }

  if ((to.name && to.name !== 'login' && to.name !== 'loading') || !to.name) {
    Server.localData('token').then(data => {
      Server.setToken(data);
      next();
    }, data => {
      toast({
        message: '请先登录再访问页面'
      });
      APP.$router.replace('/login');
    });
  } else {
    next();
  }
});*/

export default APP;
