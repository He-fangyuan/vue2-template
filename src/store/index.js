import Vue from "vue";
import Vuex from "vuex";

if (process.env.NODE_ENV === "development") {
  Vue.use(Vuex);
}

import user from "./components/user";
import menu from "./components/menu";
import router from "./components/router";
import richText from "./components/richText";

export default new Vuex.Store({
  modules: {
    user,
    menu,
    router,
    richText,
  },
});
