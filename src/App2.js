import React from "react";
import { Provider } from "react-redux";
import { APIstore } from "./store/apistore";
import { Counter } from "./components/Counter";

function App() {
  return (
    <Provider store={APIstore}>
      <div className="App">
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
