import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const AddNote = () => {
    const context=useContext(NoteContext);
    const {addNote}=context

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const  handleClick = (e) => {
        //prevent default
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
    const handleOnChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
    }
    return (
        <>
            <h1>Add a note</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={handleOnChange} type="text" className="form-control" value={note.title} id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input onChange={handleOnChange} type="text" className="form-control" value={note.description} id="description" name="description" />
                </div>
                
                <button type="submit" onClick={handleClick} className="btn btn-primary">Add Note</button>
            </form>
        </>
    )
}

export default AddNote