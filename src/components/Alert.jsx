import React, { useContext } from 'react'
import NoteContext from '../contexts/notes/noteContext'

const Alert = () => {
    const ntCntxt = useContext(NoteContext)
    const { alert } = ntCntxt
    // ntCntxt.showAlert("hello", "warning")
    return (
        <>
            <div className={`alert alert-${alert.type}`} role="alert">
                {alert.msg}
            </div>
        </>
    )
}

export default Alert