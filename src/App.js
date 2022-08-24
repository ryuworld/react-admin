import React from "react";
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from "./resources/css/GlobalStyles";
import Header from "./views/components/layout/Header";
import Dashboard from './views/pages/Dashboard';
import Userlist from './views/pages/Userlist';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="App">
        <Header name="관리자" />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="pages/dashboard" element={<Dashboard/>} />
          <Route path="pages/userlist" element={<Userlist/>} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
