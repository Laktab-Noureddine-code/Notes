import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CgCloseR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { AddNote } from "../../redux/notesSlice";

function NewNote({ open, setOpen }) {
  if (!open) return null;
  const [title, setTitle] = useState("");
  const [folderId, setFolderId] = useState(1);
  const [notes, setNotes] = useState("");
  const folders = useSelector((state) => state.notes.folders);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);
  function handleDispatch() {
    if (title) {
      dispatch(
        AddNote({
          id: Date.now(),
          title: title,
          folderId: folderId,
          content: notes,
          createdAt: Date.now(),
        })
      );
      setOpen(!open);
    }
  }
  return createPortal(
    <>
      <div
        onClick={() => setOpen(false)}
        className="fixed  top-0 left-0 right-0 bottom-0  bg-black/10 z-1000"
      />
      <div className="fixed top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] min-h-[600px] px-4 py-2 bg-[#f8f8f8] z-1000">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">New Note :</h1>
          <button className="cursor-pointer " onClick={() => setOpen(false)}>
            <CgCloseR className="text-3xl text-gray-400" />
          </button>
        </div>
        <div>
          <div className="my-1">
            <label className="text-lg font-semibold my-3">
              <p className="mb-1">The Title :</p>
              <input
                type="text"
                className="border w-full text-bold px-2 py-1 text-xl rounded-lg"
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <div className="my-1">
              <p className="text-lg font-semibold">The Folder :</p>
              <div className="px-4">
                <select
                  className="my-4 w-full border text-bold px-2 py-1 text-xl rounded-lg"
                  value={+folderId}
                  onChange={(e) => setFolderId(e.target.value)}
                >
                  {folders.map((folder, index) => (
                    <option key={index} value={+folder.id}>
                      {folder.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="my-1">
              <p className="text-lg font-semibold">Notes :</p>
              <textarea
                className="border text-bold px-2 py-1 text-xl rounded-lg w-full"
                onChange={(e) => setNotes(e.target.value)}
                rows={11}
              ></textarea>
            </div>
            <button
              className="text-white font-semibold text-xl bg-blue-600 w-full p-3 rounded-lg cursor-pointer"
              onClick={handleDispatch}
            >
              Create Folder
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
}

export default NewNote;
