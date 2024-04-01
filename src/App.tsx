import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/*<Route path="about" element={<AboutPage />} />*/}
        {/*<Route path="users/:userId" element={<UserPage />} />*/}
        {/* Добавьте дополнительные маршруты здесь */}
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
