import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-2">
        <h1 className="text-3xl font-bold">MY NOTES</h1>
        <div className="bg-[#f6f9fb] flex items-center gap-2 p-2 w-[30%] rounded-lg">
          <IoSearchOutline className="size-6 text-gray-400 cursor-pointer" />
          <input
            type="text"
            placeholder="Search"
            className="font-semibold focus:outline-0 text-lg"
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
