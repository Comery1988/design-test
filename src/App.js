//import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./Pages/Header/Header";
import Content from "./Pages/Content/Content";
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Content title={"Condimentum consectetur"}/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
