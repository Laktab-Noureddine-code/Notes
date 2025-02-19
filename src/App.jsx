import React from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Main />
      </div>
    </>
  );
}

export default App;
