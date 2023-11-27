import React from "react";
import NoteItem from "./Note-Item";

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <>
            {
                notes.length !== 0 ?
                    <div className="notes-list">
                        {
                            notes.map(note => (
                                <NoteItem key={note.id} {...note} id={note.id} onDelete={onDelete} onArchive={onArchive} />
                            ))
                        }
                    </div>
                    :
                    <p className="notes-list__empty-message">No notes here.</p>
            }
        </>
    )

}

export default NoteList;