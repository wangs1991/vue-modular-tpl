import Vue from 'vue';
import Vuex from 'vuex';
import Modules from '@/switches/index';
import Server from '../server/index';
let local = Server.localData;

Vue.use(Vuex);

export default new Vuex.Store({
  state: { {{#if_eq category "web-pc"}}{{else}}
    titleBar: '易人社',
    titleBarBack: false,
    titleBarDelete: false,
    titleBackground: true,
    titleShow: true,
    footerActive: 'home',
    footerShow: true,
    authAsk: true,
    isLoading: false {{/if_eq}}
  },
  mutations: { {{#if_eq category "web-pc"}}{{else}}
    /**
     * 全局加载状态
     * @param state
     * @param flag
     */
    loading (state, flag) {
      state.isLoading = flag;
    },
    titleBarCtrl (state, opts = {title: '易人社', back: false, show: true, del: false, hideBg: false}) {
      state.titleBar = opts.title;
      state.titleBarBack = opts.back;
      state.titleBarDelete = opts.del;
      state.titleShow = opts.show;
      state.titleBackground = !opts.hideBg;
    }, {{/if_eq}}
  },
  modules: Modules.stores
});
