import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element"; //导入UI库
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/element.css";
// 导入国际化包
import i18n from "@/lang";
//导入全局样式表
import "./assets/css/golbal.css";
import "./assets/css/common.css";
import "./icons"; // icon
import TreeTable from "vue-table-with-tree-grid";
Vue.component("tree-table", TreeTable);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
