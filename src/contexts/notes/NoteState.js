import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
    
    const [notes, setNotes] = useState([])
    const host='http://localhost:5000/'

// GET ALL NOTES
const getNotes = async () => {
    console.log("getting all notes...");
    const response = await fetch(`${host}api/notes/getnotes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk0M2NiNzg5MzIzOWVmN2I4YTQzYiIsImlhdCI6MTcxNDA0OTQwMn0.6KDi03lsffPxP3MlCMu1XzsjBofkP5iuM2h9WagKblg'
        }
    })
    console.log('getting response...');
    const json = await response.json()
    console.log(json);
    setNotes(json)
}



//ADD A NOTE
    const addNote =async (n) => {
        const response= await fetch(`${host}api/notes/addnote`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'authToken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk0M2NiNzg5MzIzOWVmN2I4YTQzYiIsImlhdCI6MTcxNDA0OTQwMn0.6KDi03lsffPxP3MlCMu1XzsjBofkP5iuM2h9WagKblg'
            },
            body:JSON.stringify({title:n.title,description:n.description,tag:n.tag})
        })
        const json=await response.json();
        console.log(json);
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

        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState