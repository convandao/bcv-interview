import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import Posts from './pages/Posts';
import './App.scss';

import configureStore from "./store";
const store = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route path="/" component={Posts} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
