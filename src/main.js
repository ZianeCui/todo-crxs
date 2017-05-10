import Vue from "vue";
import App from "./app.vue";
import "../node_modules/";

Vue.config.debug = true; //开启错误提示

new Vue({
  el: '#app',
  data: {
    message: "Hello Vue!!"
  },
  components: {
    App
  }
})