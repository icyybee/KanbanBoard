import "./note.styles.scss";

const Note = ({notesItem}) => {
    const {content, color} = notesItem;
    
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