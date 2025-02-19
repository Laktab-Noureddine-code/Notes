import React from "react";
import Folders from "./MainComponents/Folders";
import Notes from "./MainComponents/Notes";

function Main() {
  return (
    <div className="bg-[#ececec] flex-1 rounded-tl-3xl px-4 py-4">
      <Folders />
      <Notes />
    </div>
  );
}

export default Main;
