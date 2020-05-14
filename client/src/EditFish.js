import React, { useState } from 'react'

const EditFish = ({fish}) => {
    const [name, setName] = useState(fish.name)
    const [type, setType] = useState(fish.type)

    const editFish = async (e) => {
        e.preventDefault()
        const body = {name, type}        
        try {
            const fetchFish = await fetch(`http://localhost:5000/home/${fish.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        }catch (error) {
            console.log(error)
        }

         window.location = "/home"
    }

    return (
        <div>        
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${fish.id}`}>
            Edit 
            </button>

            <div className="modal" id={`id${fish.id}`} onClick={() => {
                setName(fish.name)
                setType(fish.type)
            }}>
            <div className="modal-dialog">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => {
                setName(fish.name)
                setType(fish.type)
            }}>&times;</button>
                </div>

                <div className="modal-body">
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/><br />
                    <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)}/>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={editFish}>Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={() => {
                        setName(fish.name)
                        setType(fish.type)
                    }}>Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditFish