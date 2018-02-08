/* eslint-disable */
import toast from '@/components/toast/toast';
let first = null;

document.addEventListener('plusready', function() {
  let webview = plus.webview.currentWebview();

  plus.key.addEventListener('backbutton', function() {
    webview.canBack(function(e) {
      let href = window.location.href;
      let name = href.split('#/')[1];

      if(e.canBack && href.indexOf('home') < 0 && !!name) {   // 首页、登录页面返回退出应用
        webview.back();
      } else {
        if (!first) {
          first = new Date().getTime();
          toast({
            message: '再按一次退出应用',
            duration: 1800
          });
          setTimeout(function() {
            first = null;
          }, 1790);
        } else {
          if (new Date().getTime() - first < 1800) {
            //webview.close(); //hide,quit
            plus.runtime.quit();
          }
        }
      }
    })
  }, false);
  plus.navigator.setStatusBarBackground('#5e8ff7');
});
