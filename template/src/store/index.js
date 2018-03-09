import Vue from 'vue';
import Vuex from 'vuex';
import Modules from '@/switches/index';
import Server from '../server/index';
let local = Server.localData;

Vue.use(Vuex);

export default new Vuex.Store({
  state: { },
  mutations: {

  },
  modules: Modules.stores
});
