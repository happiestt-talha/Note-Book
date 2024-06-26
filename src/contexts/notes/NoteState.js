import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {

    const [notes, setNotes] = useState([])
    // const [alert, setAlert] = useState({ msg: "An ALert from COntext", type: "success" })
    const [alert, setAlert] = useState(null)
    const host = 'http://localhost:5000/'
    // const host = 'https://inotes-on.vercel.app/'

    // GET ALL NOTES
    const getNotes = async () => {

        try {
            const response = await fetch(`${host}api/notes/getnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authtoken': localStorage.getItem('token')
                }
            })
            const json = await response.json()
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
                'authToken': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //DELETE A NOTE
    const deleteNote = async (id) => {
        const response = await fetch(`${host}api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            }
        })
        //eslint-disable-next-line
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    //EDIT A NOTE
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authToken': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        //eslint-disable-next-line
        const json = await response.json();

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)

    }

    const showAlert = (message, type) => {
        setAlert({msg: message,type: type})
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }

    return (

        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes, showAlert, alert }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState