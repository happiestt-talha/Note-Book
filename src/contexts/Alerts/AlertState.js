import AlertContext from "./alertContext";
import React, { useState } from 'react'


const AlertState = (props) => {
    // const [alert, setAlert] = useState(null)
    const [alert, setAlert] = useState(null)
    // const [alert, setAlert] = useState({ msg: "An ALert from COntext", type: "success" })
    const showAlert = (message, type) => {
        setAlert({msg: message,type: type})
        setTimeout(() => {
            setAlert(null)
        }, 3000)
    }
    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState