import React from "react";
import { MdAssignmentAdd } from "react-icons/md";

function SideBar() {
  return (
    <div className="min-h-[88vh] max-w-[200px] p-3">
      <ul>
        <li className="flex items-center gap-1">
          <MdAssignmentAdd />
          <p className="font-semibold">Add new</p>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
