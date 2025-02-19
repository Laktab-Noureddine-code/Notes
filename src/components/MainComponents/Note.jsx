import React from "react";
import { LuClock1 } from "react-icons/lu";
import { useSelector } from "react-redux";
import colors from "../../utils/colors";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

function Note(props) {
  // const color = colors.find(
  //   (color) =>
  //     color.id ===
  //     useSelector((state) => state.notes.folders).find(
  //       (folder) => folder.id === props.note.folderId
  //     ).colorId
  // );
  function FolderColor() {
    const folder = useSelector((state) => state.notes.folders);
    const colorId = folder.find(
      (colorid) => colorid.id == props.note.folderId
    ).colorId;
    const color = colors.find((color) => color.id == colorId);
    return color;
  }

  const createdAt = format(props.note.createdAt, "hh.mm a EEEE", {
    locale: fr,
  });
  return (
    <div
      className={`relative box-border w-[260px] min-h-[230px] font-[cursive] text-[20px] rounded-[10px] 
       bg-[length:100%_1.2rem] leading-[1.2rem]
               ${FolderColor().lightBgColor}

      p-[1.1rem_0.5rem_0.3rem_2.4rem] shadow-xl`}
    >
      <h1 className="pb-2 text-lg font-bold">{props.note.title}</h1>
      <div className="absolute border-l border-[#d88] h-full left-[2rem] top-0"></div>
      <p className="m-0 indent-[1rem] pb-[1rem] text-gray-800 text-sm leading-[20px]">
        {props.note.content}
      </p>
      <div className="absolute text-sm bottom-1 flex items-center gap-2">
        <LuClock1 />
        <span>{createdAt}</span>
      </div>
    </div>
  );
}

export default Note;
