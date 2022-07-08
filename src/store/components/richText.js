const RichText = {
  state: {
    MarkdownText: "",
  },
  mutations: {
    saveMarkdownText: (state, text) => {
      state.MarkdownText = text;
    },
  },
  getters: {
    MarkdownText: (state) => state.MarkdownText,
  },
};

export default RichText;
