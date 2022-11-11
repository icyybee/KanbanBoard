import "./notelist.styles.scss";

import {useState} from "react";
import Note from "../note/note.component";
import CreateNote from "../note/createnote.component";
import Notur from "../note/notur.component";


const Notelist = ({notes}) => {
    
    const [noteItem, setNote] = useState([]);

    function addNote(newNote) {
        setNote((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function submitNote(event) {
        event.preventDefault();
        //addNote((noteItem));
        setNote({
          content: ""
        });
    }

    return (
        <div className="note-list">
            {notes.map((note) => {
                return (
                    <div className="note">
                        <div className="note__head">
                            <h3>{note.title}</h3>
                            <div className="note__head--ellipse">&nbsp;</div>
                        </div>
                        
                        <div className="note__body">
                            <Notur notesItem={note} content={note.content} />
                            <CreateNote onAdd = {addNote} key={note.id} note={note}/>
                            <Note key={note.id} notesItem={note} content={note.content}/>
                        </div>
                        
                        <button className="btn" onClick = {submitNote}>+</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Notelist;

