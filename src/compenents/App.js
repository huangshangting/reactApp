import React from 'react';
import store from '../redux/store';
import {Provider} from 'react-redux';
import Router from "./Routers"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
