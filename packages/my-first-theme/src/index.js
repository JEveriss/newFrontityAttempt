import Root from "./components";

import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    myTheeme: Root,
  },
  state: {
    myTheeme: {
      isUrlVisible: true,
    },
  },
  actions: {
    myTheeme: {
      toggleUrl: ({ state }) => {
        state.myTheeme.isUrlVisible = !state.myTheeme.isUrlVisible;
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};

export default myFirstTheme;
