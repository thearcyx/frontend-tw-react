import React from "react";
import logo from "./logo.png";

function App() {
  return (
    <>
      <div className="w-[1200px] mx-auto flex flex-col items-center mt-[175px]">
        <img src={logo} className="w-[200px]" alt="logo" />
        <p className="text-[#356db2] mt-[30px] text-[20px] font-bold">
          Happy Hacking Everyone !
        </p>
      </div>
    </>
  );
}

export default App;
