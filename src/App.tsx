import React from 'react';
import './App.css';
import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes";
function App() {
  const Router = () => { return useRoutes(Routes) }
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
