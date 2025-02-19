import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdNoteAlt } from "react-icons/md";
import Note from "./Note";
import NewNote from "../Modals/NewNote";

function Notes() {
  const [openNote, setOpenNote] = useState(false);
  const notes = useSelector((state) => state.notes.notes);
  return (
    <div>
      <h1 className="title">My Notes</h1>
      <div className="flex items-center gap-6 mb-2">
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
      <div className="flex gap-3 items-center ">
        <div className="flex gap-3 flex-wrap">
          {notes.map((note, index) => (
            <Note note={note} key={index} />
          ))}
        </div>
        <button
          className="flex self-start items-center justify-center flex-col size-30 border-dashed border-2 cursor-pointer rounded-lg border-gray-500 "
          onClick={() => setOpenNote(!openNote)}
        >
          {/* add folders */}
          <MdNoteAlt className="text-2xl text-gray-700" />
          <p className="text-sm font-semibold">New Note</p>
        </button>
      </div>
      {openNote && <NewNote open={openNote} setOpen={setOpenNote} />}
    </div>
  );
}

export default Notes;
