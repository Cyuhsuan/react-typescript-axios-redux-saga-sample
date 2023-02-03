import React from 'react';
import './App.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import { interceptor } from "./utils/ajax";
function App() {
  interceptor(store.getState().auth);
  const Router = () => { return useRoutes(Routes) }
  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
