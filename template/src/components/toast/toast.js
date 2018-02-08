import Vue from 'vue';
import Toast from './toast.vue';

const ToastConstructor = Vue.extend(Toast);

let removeDom = event => {
  event.target.parentNode.removeChild(event.target);
};

ToastConstructor.prototype.close = function () {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
};
const toast = (options = {}) => {

  let instance = new ToastConstructor().$mount(document.createElement('div'));
  let duration = options.duration || 2500;

  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'top';
  instance.callback = function(){
    options.callback && options.callback();
    instance.close();
  };
  document.body.appendChild(instance.$el);
  instance.visible = true;
  Vue.nextTick(() => {
    instance.timer = setTimeout(function () {
      instance.close();
    }, duration);
  });
  return instance;
};

export default toast;
