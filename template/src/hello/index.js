import Home from './Home';
import Welcome from './Welcome';
import Document from './Document';

export default {
  routers: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Welcome',
          component: Welcome
        },
        {
          path: '/doc',
          name: 'Document',
          component: Document
        }
      ]
    }
  ],
  stores: {
    state: {
      mobile: ''
    },
    setter: {
      mobile (val) {
        console.log(val);
      }
    },
    mutations: {
      updateMobile(state, mobile) {
        this.state.User.mobile = mobile;
      }
    }
  }
};
