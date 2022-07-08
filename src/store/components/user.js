const user = {
  state: {
    name: "admin",
    token: "",
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_Token: (state, token) => {
      state.token = token;
    },
    Clear_Token: (state) => {
      state.token = null;
    },
  },
  getters: {
    name: (state) => state.name,
    token: (state) => state.token,
  },
};

export default user;
