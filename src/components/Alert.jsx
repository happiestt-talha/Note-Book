import React, { useContext } from 'react';
// import alertContext from '../contexts/Alerts/alertContext';
import NoteContext from '../contexts/notes/noteContext';

const Alert = () => {
    const { alert } = useContext(NoteContext);
    
    return (
        <>
            {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                    {alert.msg}
                </div>
            )}
        </>
    );
};

export default Alert;
