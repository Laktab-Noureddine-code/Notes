import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CgCloseR } from "react-icons/cg";
import colors from "../../utils/colors";
import { useDispatch } from "react-redux";
import { AddFolder } from "../../redux/notesSlice";

function NewFolder({ open, setOpen }) {
  if (!open) return null;
  const [name, setName] = useState("");
  const [colorId, setColorId] = useState(1);
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
    if (name) {
      dispatch(
        AddFolder({
          id: Date.now(),
          name: name,
          colorId: colorId,
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
      <div className="fixed top-[50%] rounded-lg left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] h-[450px] px-4 py-6 bg-[#f8f8f8] z-1000">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">New Folder :</h1>
          <button className="cursor-pointer " onClick={() => setOpen(false)}>
            <CgCloseR className="text-3xl text-gray-400" />
          </button>
        </div>
        <div>
          <div className="my-3">
            <label className="text-lg font-semibold my-3">
              <p className="mb-1">Folder Name :</p>
              <input
                type="text"
                className="border w-full text-bold px-2 py-1 text-xl rounded-lg"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <div className="my-3">
              <p className="text-lg font-semibold">Folder Color :</p>
              <div className="my-4 flex items-center  gap-4 flex-wrap px-10">
                {colors.map((color, index) => (
                  <div key={index}>
                    <input
                      value={color.id}
                      name="color"
                      type="radio"
                      id={color.id}
                      className="hidden peer"
                      checked={color.id === colorId}
                      onChange={(e) => setColorId(e.target.value)}
                    />
                    <label
                      htmlFor={color.id}
                      className={`flex h-16 w-24 cursor-pointer flex-col items-center justify-center rounded-xl 
            ${color.id == colorId ? "border-4 shadow-xl" : ""}
            ${color.darkBgColor} p-1 transition-transform duration-150 
            active:scale-95 peer-checked:shadow-md`}
                    ></label>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="text-white font-semibold text-xl bg-blue-600 w-full p-3 rounded-lg mt-26 cursor-pointer"
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

export default NewFolder;
