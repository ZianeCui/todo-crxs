
import Vue from "vue";
import App from "./components/app.vue";

Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#app',
  data: {
      message: "Hello Vue!!"
  }
})