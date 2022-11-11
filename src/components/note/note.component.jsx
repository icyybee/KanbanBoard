import "./note.styles.scss";

const Note = ({notesItem, newNote}) => {
    const {color} = notesItem;
    const {content} = newNote;

    return (
        <div 
            className="note__item note__new"
            style={{
                borderTop: `5px solid ${color}`
            }}
        >
            <p>{content}</p>
        </div>
    )
}

export default Note;