import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const ntCntxt = useContext(NoteContext);
    // eslint-disable-next-line
    const { notes, setNotes } = ntCntxt;

    return (
        <>
            <h1 className='my-3 text-center text-capitalize bg-warning'>Your Notes</h1>
            <div className="row">
                {notes.map((note) => {
                    return <div className="col-md-4" key={note._id}>
                        <Noteitem note={note} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Notes