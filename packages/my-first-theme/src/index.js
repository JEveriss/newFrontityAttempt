import Root from "./components";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    myTheeme: Root
  },
  state: {
    myTheeme: {
      isUrlVisible: true,
    }
  },
  actions: {
    myTheeme: {
      toggleUrl: ({ state }) => {
        state.myTheeme.isUrlVisible = !state.myTheeme.isUrlVisible
      }
    }
  }
};

export default myFirstTheme