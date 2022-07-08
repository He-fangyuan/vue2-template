const user = {
  state: {
    breadcrumbArray: ["Dashboard"],
    activePath: "home",
  },
  mutations: {
    SET_BreadcrumbArray: (state, arr) => {
      if (arr.length === 1) {
        if (arr[0] !== "Dashboard") {
          state.breadcrumbArray = ["Dashboard", ...arr];
        } else {
          state.breadcrumbArray = ["Dashboard"];
        }
      } else {
        state.breadcrumbArray = ["Dashboard", ...arr];
      }
    },
    SET_ActivePath: (state, path) => {
      state.activePath = path;
    },
  },
  getters: {
    breadcrumbArray: (state) => state.breadcrumbArray,
    activePath: (state) => state.activePath,
  },
};

export default user;
