import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
const st1 = {
    name: "Talha",
    Status:"Working"
}
const [state, setState] = useState(st1)
const updtState = () => {
setTimeout(() => {
    setState({
        name: "IDK",
        Status:"Busy"
    })
}, 2000)
    
}
    return (

        <NoteContext.Provider value={{state,updtState}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState