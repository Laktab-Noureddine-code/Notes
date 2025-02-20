import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaNoteSticky } from "react-icons/fa6";
import colors from "../../utils/colors";
import { format } from "date-fns";
import DropEdit from "./updateDrop/DropEdit";

function Folder(props) {
  const [openEdit, setOpenEdit] = useState(false);
  const editRef = useRef(null);
  const openBtn = useRef(null);

  useEffect(() => {
    const handleOpen = (e) => {
      // console.log(editRef.current)
      if (editRef.current && !editRef.current.contains(e.target) && !openBtn) {
        setOpenEdit(false);
        // console.log(openBtn.current)
      }
    };
    document.addEventListener("click", handleOpen);
    return () => document.removeEventListener("click", handleOpen);
  }, [openEdit]);
  const color = colors.find((color) => color.id == props.info.colorId);
  const createdAt = format(props.info.createdAt, "MM/dd/yyyy");
  return (
    <div>
      <div
        className={`rounded-lg ${color.lightBgColor} px-5 py-3 min-w-[260px] min-h-[100px] shadow-xl`}
      >
        <div className="flex justify-between relative">
          <FaNoteSticky className={`size-12 mb-2 ${color.darkTextColor}`} />
          <button
            className="cursor-pointer"
            onClick={() => setOpenEdit(true)}
            ref={openBtn}
          >
            <BsThreeDots size={20} />
          </button>
          <div className="absolute right-[-10px] top-8">
            {openEdit && (
              <div ref={editRef}>
                <DropEdit />
              </div>
            )}
          </div>
        </div>
        <h1 className="text-2xl font-semibold mb-2">{props.info.name}</h1>
        <p className="text-sm font-semibold">{createdAt}</p>
      </div>
    </div>
  );
}

export default Folder;
