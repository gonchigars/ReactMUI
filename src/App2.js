import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
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
    alignItems: '',
    height: '100vh', 
    backgroundColor: '#f0f0f0', 
    textAlign: 'center',
  },
  spacer:{
    flex: 1,
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '15px',
    backgroundColor: '#fff', 
    boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom:'20px',
  },
};

export default App2;
