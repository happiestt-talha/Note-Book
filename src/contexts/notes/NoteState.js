import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {

    const [notes, setNotes] = useState([])
    const host = 'http://localhost:5000/'

    // GET ALL NOTES
    const getNotes = async () => {

        console.log("getting all notes...");
        try {
            const response = await fetch(`${host}api/notes/getnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk0M2NiNzg5MzIzOWVmN2I4YTQzYiIsImlhdCI6MTcxNDA0OTQwMn0.6KDi03lsffPxP3MlCMu1XzsjBofkP5iuM2h9WagKblg'
                }
            })
            console.log('Notes all are fetched');
            const json = await response.json()
            console.log(json);
            setNotes(json)
        } catch (error) {
            console.log(error.message)
        }

    }

    //ADD A NOTE
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk0M2NiNzg5MzIzOWVmN2I4YTQzYiIsImlhdCI6MTcxNDA0OTQwMn0.6KDi03lsffPxP3MlCMu1XzsjBofkP5iuM2h9WagKblg'
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //DELETE A NOTE
    const deleteNote = async (id) => {
        console.log("deleting note with id", id)
        const response = await fetch(`${host}api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTk0M2NiNzg5MzIzOWVmN2I4YTQzYiIsImlhdCI6MTcxNDA0OTQwMn0.6KDi03lsffPxP3MlCMu1XzsjBofkP5iuM2h9WagKblg'
            }
        })
        const json = await response.json();
        console.log(json);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //EDIT A NOTE
    const editNote = (id) => {
        console.log("editing", id)
    }

    return (

        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState