import React from "react";
import "./scss/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Visual from "./pages/Visual";
import Life from "./pages/Life";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Vision from "./pages/Vision";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <div className="container">
        <Visual />
        <Profile />
        <Skills />
        <Portfolio />
        <Life />
        <Vision />
      </div>
      <Footer />
    </div>
  );
};

export default App;
