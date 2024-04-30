import AlertCotext from "./alertContext";
import React, { useState } from 'react'


const AlertState = (props) => {
    // const [alert, setAlert] = useState(null)
    const [alert, setAlert] = useState({ msg: "An ALert from COntext", type: "success" })
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }
    return (
        <AlertCotext.Provider value={{ alert, showAlert }}>
            {props.children}
        </AlertCotext.Provider>
    )
}
export default AlertState