import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
    
    const [notes, setNotes] = useState([])
    const host='http://localhost:5000/'
//ADD A NOTE
    const addNote =async (n) => {
        const response= await fetch(`${host}api/notes/addnote`,{
            method:'POST',
        })
        //eslint-disable-next-line
        const note={
            "_id": "661d374ad875e129bbf3c3dc",
            "user": "661943cb7893239ef7b8a43b",
            "title": n.title,
            "description": n.description,
            "tag": n.tag,
            "date": "2024-04-15T14:18:50.068Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }
//DELETE A NOTE
const deleteNote = async (id) => {
    const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
}
//EDIT A NOTE
const editNote=(id)=>{
    console.log("editing",id)
}
    return (

        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState