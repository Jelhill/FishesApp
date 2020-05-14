import React, {useState} from 'react'

const Form = () => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {name, type}
            const fetchApi = await fetch("http://localhost:5000/home", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            window.location = "/home"
            
        } catch (error) {
            console.log(error)
        }   
    }

    return (
        <div className="form-table col-6">
            <h2>Enter Fish Name and Type</h2>
            <form action="">
                <input type="text" placeholder="Name of Fish" className=" style-input1 form-control" onChange={(e) => setName(e.target.value)}/><br />
                <input type="text" placeholder="Type of Fish" className="style-input1 form-control" onChange={(e) => setType(e.target.value)} /><br/>
                <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form