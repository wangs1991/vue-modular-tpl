import Vue from 'vue';
import Router from 'vue-router';
import Switches from '@/switches/index';

Vue.use(Router);

export default new Router({
  routes: Switches.routers
});
