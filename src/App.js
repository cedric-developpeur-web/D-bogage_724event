/* istanbul ignore file */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";
import Page from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
