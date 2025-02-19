import React, { useState } from "react";
import { useSelector } from "react-redux";
import Folder from "./Folder";
import { FaNoteSticky } from "react-icons/fa6";
import NewFolder from "../Modals/NewFolder";

function Folders() {
  const [openAddFolder, setOpenAddFolder] = useState(false);
  const folders = useSelector((state) => state.notes.folders);
  return (
    <div>
      <h1 className="title">Folders</h1>
      <div className="flex items-center gap-6 mb-4">
        <div>
          <h3>Todays</h3>
        </div>
        <div>
          <h3>This Week</h3>
        </div>
        <div>
          <h3>This Month</h3>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-3 flex-wrap ">
          {folders.map((folder, index) => (
            <Folder info={folder} key={index} />
          ))}
        </div>
        <button
          className="flex self-start items-center justify-center flex-col size-30 border-dashed border-2 cursor-pointer rounded-lg border-gray-500 "
          onClick={() => setOpenAddFolder(!openAddFolder)}
        >
          {/* add folders */}
          <FaNoteSticky className="text-2xl text-gray-700" />
          <p className="text-sm font-semibold">New Folder</p>
        </button>
      </div>
      {openAddFolder && (
        <NewFolder open={openAddFolder} setOpen={setOpenAddFolder} />
      )}
    </div>
  );
}

export default Folders;
