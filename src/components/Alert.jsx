import React, { useContext } from 'react';
import alertContext from '../contexts/Alerts/alertContext';

const Alert = () => {
    const { alert } = useContext(alertContext);
    
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
