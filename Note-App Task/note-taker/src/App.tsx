import React from "react";
import "./App.css";
import NoteList from "./components/NotesList";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    // Main container with background color and flex layout
    <div className="bg-slate-500 min-h-screen flex flex-col items-center justify-center text-white">
      
      {/* Page title */}
      <h1 className="text-4xl font-semibold mb-8">Keep Note</h1>
      
      {/* Container for the note form */}
      <div className="bg-black p-6 rounded-lg shadow-lg w-96">
        <NoteForm /> {/* Render the NoteForm component */}
      </div>
      
      {/* Container for the note list */}
      <div className="mt-8 w-96">
        <NoteList /> {/* Render the NoteList component */}
      </div>
    </div>
  );
}

export default App;
