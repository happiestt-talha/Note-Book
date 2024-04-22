import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const AddNote = () => {
    const context=useContext(NoteContext);
    const {addNote}=context

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const  handleClick = (e) => {
        //prevent default
        e.preventDefault();
        addNote(note)
    }
    const handleOnChange = (e) => {
        setNote({...note,[e.target.name]:e.target.value})
        // console.log('e.target.name: ',e.target.name);
        // console.log('e.target.value: ',e.target.value);
        // console.log('note: ',note);
    }
    return (
        <>
            <h1>Add a note</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input onChange={handleOnChange} type="email" className="form-control" id="title" name="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input onChange={handleOnChange} type="text" className="form-control" id="description" name="description" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddNote