import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a Note
export interface Note {
  id: number;
  title: string; // Add title field
  text: string;
}

// Define the initial state for the notes slice
interface NotesState {
  notes: Note[];
}

// Initialize the state with an empty notes array
const initialState: NotesState = {
  notes: [],
};

// Create a Redux slice
const noteSlice = createSlice({
  name: "notes", // Slice name
  initialState, // Initial state
  reducers: {
    // Reducer to add a new note
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    // Reducer to edit an existing note
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title, text } = action.payload;
      const existingNote = state.notes.find((note) => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.text = text;
      }
    },
    // Reducer to delete a note
    deleteNote: (state, action: PayloadAction<number>) => {
      // Filter out the note with the specified ID
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Export the action creators and reducer from the slice
export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;

// // import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// // Define the structure of a Note
// export interface Note {
//   id: number;
//   title: string; // Add title field
//   text: string;
// }

// // Define the initial state for the notes slice
// interface NotesState {
//   notes: Note[];
//   status: 'idle' | 'pending' | 'succeeded' | 'failed',
//   error: string | undefined
// }

// // Initialize the state with an empty notes array

// const initialState: NotesState = {
//   notes: [],
//   status: 'idle',
//   error: undefined,
// }



// //
// export const fetchNotes = createAsyncThunk('posts/fetchNotes', async () => {
//   const response = await fetch('https://localhost:8000/notes');
//   const data = await response.json();
//   return data;
// })

// export const addNewNote = createAsyncThunk(
//   'posts/addNewNote',
//   async (initialPost: Note) => {
//       const body = JSON.stringify(initialPost);
//       const response = await fetch('https://localhost:8000/notes', {headers: {
//         "Content-Type" : "application/json"
//       }, method: 'POST', body});
//       const data = await response.json();
//       return data;
//   }
// )

// // Create a Redux slice
// const noteSlice = createSlice({
//   name: "notes", // Slice name
//   initialState, // Initial state
//   reducers: {
//     // Reducer to add a new note
//     addNote: (state, action: PayloadAction<Note>) => {
//       state.notes.push(action.payload);
//     },
//     // Reducer to edit an existing note
//     editNote: (state, action: PayloadAction<Note>) => {
//       const { id, title, text } = action.payload;
//       const existingNote = state.notes.find((note) => note.id === id);
//       if (existingNote) {
//         existingNote.title = title;
//         existingNote.text = text;
//       }
//     },
//     // Reducer to delete a note
//     deleteNote: (state, action: PayloadAction<number>) => {
//       // Filter out the note with the specified ID
//       state.notes = state.notes.filter((note) => note.id !== action.payload);
//     },
//   },

//   extraReducers(builder) {
//     builder
//       .addCase(fetchNotes.pending, (state, action) => {
//         state.status = 'pending';
//       })
//       .addCase(fetchNotes.fulfilled, (state, action) => {
//         state.status = 'succeeded'
//         // Add any fetched posts to the array
//         state.notes = state.notes.concat(action.payload)
//       })
//       .addCase(fetchNotes.rejected, (state, action) => {
//         state.status = 'failed'
//         state.error = action.error.message;
//       })
//       .addCase(addNewNote.fulfilled, (state, action) => {
//         state.notes.push(action.payload);
//       })
//   },
// });

// // Export the action creators and reducer from the slice
// export const { addNote, editNote, deleteNote } = noteSlice.actions;
// export default noteSlice.reducer;

// export const selectAllNotes = (state: any) => state.notes.notes;
