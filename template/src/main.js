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

new Vue({
  el: '#{{name}}',
  router,
  store: Store,
  components: { App },
  template: '<App/>'
});

