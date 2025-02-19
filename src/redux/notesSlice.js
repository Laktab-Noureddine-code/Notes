import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [
    {
      id: 1,
      name: "Travail notes",
      colorId: 1,
      createdAt: Date.now(),
    },
    {
      id: 2,
      name: "Études notes",
      colorId: 2,
      createdAt: Date.now(),
    },
    {
      id: 3,
      name: "Courses notes",
      colorId: 3,
      createdAt: Date.now(),
    },
  ],
  notes: [
    {
      id: 101,
      title: "Réunion avec l'équipe",
      content: "Préparer le rapport de projet et vérifier les tâches.",
      folderId: 1,
      createdAt: Date.now(),
    },
    {
      id: 102,
      title: "Cours de React",
      content: "Apprendre Redux et l'intégration avec React Router.",
      folderId: 2,
      createdAt: Date.now(),
    },
    {
      id: 103,
      title: "Cours de Laravel",
      content: "Apprendre Redux et l'intégration avec React Router.",
      folderId: 3,
      createdAt: Date.now(),
    },
  ],
};
const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    AddFolder: (state, action) => {
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };
      // console.log(state.folders);
    },
    AddNote: (state, action) => {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    },
  },
});

export const { AddFolder, AddNote } = notesSlice.actions; //returns reducers functions;
export default notesSlice.reducer;
