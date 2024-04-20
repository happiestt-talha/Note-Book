import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
const notesInitial=[
    {
        "_id": "661d374ad875e129bbf3c3dc",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:18:50.068Z",
        "__v": 0
    },
    {
        "_id": "661d3752d875e129bbf3c3de",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:18:58.579Z",
        "__v": 0
    },
    {
        "_id": "661d3754d875e129bbf3c3e0",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:19:00.140Z",
        "__v": 0
    },
    {
        "_id": "661d3ffb8dd7aead04cd4a28",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:55:55.544Z",
        "__v": 0
    },
    {
        "_id": "661d3ffd8dd7aead04cd4a2a",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:55:57.148Z",
        "__v": 0
    },
    {
        "_id": "661d3ffe8dd7aead04cd4a2c",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note B",
        "description": "Note B Added successfully",
        "tag": "business",
        "date": "2024-04-15T14:55:58.621Z",
        "__v": 0
    },
    {
        "_id": "661e9acb2eb14358b837cccf",
        "user": "661943cb7893239ef7b8a43b",
        "title": "Note to be changed",
        "description": "Note B for changing Added successfully",
        "tag": "education",
        "date": "2024-04-16T15:35:39.302Z",
        "__v": 0
    }
]
    const [notes, setNotes] = useState(notesInitial)

    return (

        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState