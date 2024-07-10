import React from "react";
import { Counter } from "./components/Counter";

function App2() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // This ensures the div takes up the full viewport height
        width: "100%",
        textAlign: "center",
      }}
    >
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  );
}

export default App2;
