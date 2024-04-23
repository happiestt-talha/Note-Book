import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "661d374ad875e129bbf3c3dc",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Meeting with Client",
            "description": "Discussed project requirements and timeline. Agreed to send proposal by Friday.",
            "tag": "business",
            "date": "2024-04-15T14:18:50.068Z",
            "__v": 0
        },
        {
            "_id": "661d3752d875e129bbf3c3de",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Budget Review",
            "description": "Reviewed monthly expenses and identified areas for cost-saving measures.",
            "tag": "finance",
            "date": "2024-04-15T14:18:58.579Z",
            "__v": 0
        },
        {
            "_id": "661d3754d875e129bbf3c3e0",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Marketing Strategy",
            "description": "Brainstormed new marketing ideas for upcoming product launch. Assigned tasks to team members.",
            "tag": "marketing",
            "date": "2024-04-15T14:19:00.140Z",
            "__v": 0
        },
        {
            "_id": "661d3ffb8dd7aead04cd4a28",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Project Update",
            "description": "Provided progress report on ongoing project. Discussed challenges and next steps.",
            "tag": "business",
            "date": "2024-04-15T14:55:55.544Z",
            "__v": 0
        },
        {
            "_id": "661d3ffd8dd7aead04cd4a2a",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Team Meeting Agenda",
            "description": "Outlined agenda for upcoming team meeting. Topics include performance review and goal setting.",
            "tag": "management",
            "date": "2024-04-15T14:55:57.148Z",
            "__v": 0
        },
        {
            "_id": "661d3ffe8dd7aead04cd4a2c",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Training Session",
            "description": "Scheduled training session for new software. All team members to attend.",
            "tag": "education",
            "date": "2024-04-15T14:55:58.621Z",
            "__v": 0
        },
        {
            "_id": "661e9acb2eb14358b837cccf",
            "user": "661943cb7893239ef7b8a43b",
            "title": "Presentation Preparation",
            "description": "Preparing slides for upcoming conference presentation. Researching latest industry trends.",
            "tag": "business",
            "date": "2024-04-16T15:35:39.302Z",
            "__v": 0
        }
    ];
    
    const [notes, setNotes] = useState(notesInitial)

//ADD A NOTE
    const addNote = (n) => {
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