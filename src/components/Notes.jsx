import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from '../contexts/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = () => {
    const navigate = useNavigate()
    const ntCntxt = useContext(NoteContext);
    const { notes, getNotes, editNote,showAlert } = ntCntxt;
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else{
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const refClose = useRef(null)
    const refFocus = useRef(null)
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })
    
    const updateNote = (crntNote) => {
        ref.current.click()
        setTimeout(() => {
            refFocus.current.focus()
        }, 500);
        setNote({id:crntNote._id,etitle: crntNote.title, edescription: crntNote.description, etag: crntNote.tag})
    }

    const handleClick = (e) => {
        //prevent default
        e.preventDefault();

        editNote(note.id,note.etitle,note.edescription,note.etag)
        refClose.current.click()
        showAlert("Note Updated Successfully","success")
        // setNote({ etitle: e.title, edescription: e.description, etag: e.tag })
    }
    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AddNote />

            <button type="button" className="d-none" ref={ref}  data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input onChange={handleOnChange} value={note.etitle} ref={refFocus} type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input onChange={handleOnChange} value={note.edescription} type="text" className="form-control" id="edescription" name="edescription" />
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='my-3 text-center text-capitalize bg-black bg-gradient text-white'>Your Notes</h1>

            {notes.length === 0 && "No notes to display"}

            <div className="row">
                {notes.map((note) => {
                    return <div className="col-md-4" key={note._id}>
                        <Noteitem note={note} updateNote={updateNote} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Notes