import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/apistore";
import { Counter } from "./components/Counter";

function App2() {
  return (
    <Provider store={store}>
      <div style={styles.appContainer}>
        <h1>Redux Counter App</h1>
        <div style={styles.counterContainer}>
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f0f0f0', // Light background color
    textAlign: 'center',
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '15px', // Rounded corners
    backgroundColor: '#fff', // White background for the counter
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
};

export default App2;
