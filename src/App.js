import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Down from "./components/Down";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Down />
    </div>
  );
}

export default App;
