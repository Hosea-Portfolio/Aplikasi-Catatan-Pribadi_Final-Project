import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./Button-Delete";
function NoteItem({ title, createdAt, body, id, onDelete, onArchive, archived }) {
    const onArchiveClick = () => onArchive(id)
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                {
                    archived === false ?
                        <button className="note-item__archive-button" onClick={onArchiveClick}>Archive</button> :
                        <button className="note-item__archive-button" onClick={onArchiveClick}>Unarchive</button>
                }
            </div>
        </div>
    )

}

export default NoteItem;