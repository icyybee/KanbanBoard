import "./note.styles.scss";

import { useState } from "react";

const CreateNote = ({note}) => {
    const [notes, setNote] = useState({
        content: ""
    });
    
    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote((prevNote) => {
          return {
            ...prevNote,
            [name]: value
          };
        });

        event.preventDefault();
    }
    
    return (
        <form 
            className="note__item create__note"
            style={{
            borderTop: `5px solid ${note.color}`
            }}
        >
            <textarea 
                name="content"
                value={notes.content}
                placeholder="Add title"
                onChange={handleChange}
            />
        </form>
    )
}

export default CreateNote;