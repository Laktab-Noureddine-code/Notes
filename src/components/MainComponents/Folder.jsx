import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaNoteSticky } from "react-icons/fa6";
import colors from "../../utils/colors";
import { format } from "date-fns";


function Folder(props) {
  const color = colors.find((color) => color.id == props.info.colorId);
  const createdAt = format(props.info.createdAt ,"MM/dd/yyyy")
  return (
    <div>
      <div
        className={`rounded-lg ${color.lightBgColor} px-5 py-3 min-w-[260px] min-h-[100px] shadow-xl`}
      >
        <div className="flex justify-between">
          <FaNoteSticky className={`size-12 mb-2 ${color.darkTextColor}`} />
          <BsThreeDots size={20} />
        </div>
        <h1 className="text-2xl font-semibold mb-2">{props.info.name}</h1>
        <p className="text-sm font-semibold">{createdAt}</p>
      </div>
    </div>
  );
}

export default Folder;
