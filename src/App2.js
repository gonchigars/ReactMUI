import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/apistore";
import { Counter } from "./components/Counter";

function App2() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    flexDirection: 'column',
  };

  return (
    <Provider store={store}>
      <div style={appStyle}>
        <h1>Redux Counter App</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App2;
