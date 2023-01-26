import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes.js";
import CreateArea from "./CreateArea";

// function createNote(noteEntry){
//     return <Note
//         key= {noteEntry.key} 
//         title= {noteEntry.title} 
//         description= {noteEntry.content}
//     />
// }

// function App(){
//     return (<div>
//         <Header />
//         {notes.map(createNote)}
//         <Footer />
//     </div>
//     );
// }


function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNote => {
            return[...prevNote, newNote];
        });
    }

    function deleteNote(id){
        console.log("Deleted");
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) => {
            return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
      </div>
    );
  }

export default App;