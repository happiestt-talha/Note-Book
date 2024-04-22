import React from 'react'

const Noteitem = (props) => {
    const { note } = props
    return (
        <>
            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>

                    <div className="d-flex gap-3 p-1 bg-warning">
                        <i className="fa-sharp fa-solid fa-trash"></i>
                        <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Noteitem