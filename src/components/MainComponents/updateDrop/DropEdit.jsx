import React from "react";

function DropEdit() {
  return (
    <div className="w-[100px] min-h-[40px] border rounded-lg border-gray-200 bg-white z-10 " >
      <div className="border-b border-gray-300 ">
        <button className="p-1 w-full cursor-pointer hover:bg-gray-100">
          Edit
        </button>
      </div>
      <div className="">
        <button className="p-1 w-full cursor-pointer hover:bg-gray-100">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DropEdit;
