import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/apistore";
import { Counter } from "./components/Counter";

function App2() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App2;
