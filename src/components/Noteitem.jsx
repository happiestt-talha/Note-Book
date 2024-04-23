import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const Noteitem = (props) => {
    const context=useContext(NoteContext)
    const {deleteNote,editNote}=context
    const { note } = props
    return (
        <>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <div className="d-flex gap-3 p-1 bg-primary-subtle justify-content-center">
                        {/*this note is coming from the Upar wala note*/}
                        <i className="fa-sharp fa-solid fa-trash" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-sharp fa-solid fa-pen-to-square" onClick={()=>{editNote(note._id)}}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem