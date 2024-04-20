import React from 'react'

const Noteitem = (props) => {
    const {note}=props
    return (
        <>
            <div className="card my-4">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                    </div>
            </div>
        </>
    )
}

export default Noteitem