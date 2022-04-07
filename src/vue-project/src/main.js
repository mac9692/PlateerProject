// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false;
Vue.config.devtools = true;
// 전역 변수로 설정 컴포넌트에서 this.$axios 호출 가능
Vue.prototype.$axios = axios;

Vue.filter('dateFormat', function(value) {
  if(value == '') {
    return '';
  }

  let js_date = new Date(value);

  let year = js_date.getFullYear();
  let month = js_date.getMonth() + 1;
  let day = js_date.getDate();
  let hour = js_date.getHours();
  let minute = js_date.getMinutes();

  if(month < 10) {
    month = '0' + month;
  }
  if(day < 10) {
    day = '0' + day;
  }
  if(hour < 10) {
    hour = '0' + hour;
  }
  if(minute < 10) {
    minute = '0' + minute;
  }
  return  year + '년' + month + '월' + day + '일' + ' ' + hour + "시" + minute + '분';
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
