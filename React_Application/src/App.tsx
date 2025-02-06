import React, { FC } from "react";
import { Outlet } from "react-router";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import './App.css'

const App:FC = ()  =>{
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

