const user = {
  state: {
    Collapse: false, //控制侧边栏菜单是否折叠
  },
  mutations: {
    ChangeCollapse: (state) => {
      state.Collapse = !state.Collapse; //点击取反
    },
  },
  actions: {
    setChangeCollapse(context) {
      context.commit("ChangeCollapse");
    },
  },
  getters: {
    Collapse: (state) => state.Collapse,
  },
};

export default user;
