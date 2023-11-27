import React from 'react';
import NoteInput from './Note-Input';
import NoteList from './Note-List';
import { getInitialData } from '../utils/index';
import Header from './Header';
class NoteApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            unfilteredNotes: getInitialData()
        }
        this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
        this.addNoteEventHandler = this.addNoteEventHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }


    onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    addNoteEventHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: new Date().toISOString(),
                    archived: false,
                }]
            }
        })
    }

    onArchiveHandler(id) {
        const noteToModify = this.state.unfilteredNotes.filter(note => note.id === id)[0];
        const modifiedNote = { ...noteToModify, archived: !noteToModify.archived };
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes.filter(note => note.id !== id),
                    modifiedNote
                ],
                unfilteredNotes: [
                    ...prevState.unfilteredNotes.filter(note => note.id !== id),
                    modifiedNote
                ],
            }
        });
    }
    onSearchHandler(text) {
        if (text.length !== 0 && text.trim() !== '') {
            this.setState({
                notes: this.state.unfilteredNotes.filter(note => note.title.toLowerCase().includes(text.toLowerCase())),
            })
        } else {
            this.setState({
                notes: this.state.unfilteredNotes,
            })
        }
    }

    render() {
        return (
            <div className='note-app__body'>
                <Header onSearch={this.onSearchHandler} />
                <NoteInput addNote={this.addNoteEventHandler} />
                <NoteList notes={this.state.notes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveHandler} />
            </div>
        )
    }
}
export default NoteApp;