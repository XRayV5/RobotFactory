import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "./containers/";
import store from "./store";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

const Main = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById("react-entry"));
