/*
* 移动端高清适配js适配方案;
* 750px为设计稿基准;
* 100rem = 1px;
* author: wangshuai
* 浏览器自小字号为10px;
* */
var win = window;

let browser = {
  versions: function () {
    var u = navigator.userAgent;

    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1,
      mobile: (function() {
        var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var flag = true;
        var v;

        for (v = 0; v < Agents.length; v++) {
          if (u.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return !flag;
      })(),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') === -1,
      QQbrw: u.indexOf('MQQBrowser') > -1,
      weiXin: u.indexOf('MicroMessenger') > -1,
      ucLowEnd: u.indexOf('UCWEB7.') > -1,
      ucSpecial: u.indexOf('rv:1.2.3.4') > -1,
      ucweb:(function () {
        try {
          return parseFloat(u.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2;
        } catch (e) {
          if (u.indexOf('UC') > -1) {
            return true;
          } else {
            return false;
          }
        }
      })(),
      Symbian: u.indexOf('Symbian') > -1,
      ucSB: u.indexOf('Firefox/1.') > -1,
      Quark: u.indexOf('Quark') > -1,
      Hbuilder: u.indexOf('Html5Plus') > -1
    };
  }
};

function AdjustMethods (options) {
  this.fontEl = null;
  this.docEl = document.documentElement;
  this.metaEl = document.querySelector('meta[name="viewport"]');
  this.clientWidth = 0;
  this.dpr = window.devicePixelRatio || 1;
  this.scale = 1 / this.dpr;
  this.rem = 1;
  this.options = options;
};

AdjustMethods.prototype = {
  PC () {
    let styleStr;

    this.rem = 60;
    styleStr = 'html{font-size:' + this.rem + 'px!important;}';
    return styleStr;
  },
  Mobile () {
    let styleStr;

    this.rem = (this.clientWidth * this.dpr) * 100 / parseInt(this.options.standard, 10);
    styleStr = 'html{font-size:' + this.rem + 'px!important;}';
    // 设置viewport，进行缩放，达到高清效果
    this.metaEl.setAttribute('content', 'width=' + this.dpr * this.clientWidth + ',initial-scale=' + this.scale + ',maximum-scale=' + this.scale + ', minimum-scale=' + this.scale + ',user-scalable=no');
    return styleStr;
  },
  Quark () {
    let styleStr;

    this.rem = (this.clientWidth * this.dpr) * 100 / parseInt(this.options.standard, 10);
    styleStr = 'html{font-size:' + this.rem + 'px!important;}';
    // 设置viewport，进行缩放，达到高清效果
    // this.metaEl.setAttribute('content', 'width=' + this.clientWidth + ',initial-scale='+ this.scale +',maximum-scale='+ this.scale +', minimum-scale='+ this.scale +',user-scalable=no');\
    this.metaEl.setAttribute('content', 'width=' + this.clientWidth + ',initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no');
    return styleStr;
  },
  Hbuilder () {
    let styleStr;
    let curView = document.documentElement.clientWidth;

    // alert(this.dpr);

    // 判断当前的vebview是否支持initial-scale

    this.rem = (this.clientWidth * this.dpr) * 100 / parseInt(this.options.standard, 10);
    // this.rem = (this.clientWidth) * 100 / parseInt(this.options.standard, 10);
    styleStr = 'html{font-size:' + this.rem + 'px!important;}';
    // 设置viewport，进行缩放，达到高清效果
    this.metaEl.setAttribute('content', 'width=' + this.clientWidth + ',initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no');
    return styleStr;
  },
  applyView () {
    if (!this.fontEl) {
      this.fontEl = document.createElement('style');
      this.clientWidth = this.docEl.clientWidth;
    } else {
      this.clientWidth = this.docEl.clientWidth / this.dpr;
    }
    // 设置data-dpr属性，留作的css hack之用
    this.docEl.setAttribute('data-dpr', this.dpr);
    // 分支判断
    if (browser.versions().Quark) { // 夸克浏览器
      this.fontEl.innerHTML = this.Quark();
    } else if (browser.versions().mobile) {  // 普通移动端页面
      this.fontEl.innerHTML = this.Mobile();
    } else {  // pc页面
      this.fontEl.innerHTML = this.PC();
    };
    if (browser.versions().Hbuilder) {  // Hbuilder webApp
      this.fontEl.innerHTML = this.Hbuilder();
    };
    // 动态写入样式
    this.docEl.firstElementChild.appendChild(this.fontEl);
  }
};

let mobileTransfer = (function () {
  let adjust;

  return function (options) {
    adjust = adjust || new AdjustMethods(options);
    adjust.applyView();

    // 给js调用的，某一dpr下rem和px之间的转换函数
    window.rem2px = function(v) {
      v = parseFloat(v);
      return v * adjust.rem;
    };
    window.px2rem = function(v) {
      v = parseFloat(v);
      return v / adjust.rem;
    };
    window.dpr = adjust.dpr;
    window.rem = adjust.rem;
  };
})();

export default {
  init(opts = {
    'standard': 750
  }) {
    let time = +new Date();

    win.addEventListener('resize', function () {
      if (+new Date() - time < 100) {
        return false;
      }
      mobileTransfer(opts);
    }, false);
    mobileTransfer(opts);
  },
  browser
};
