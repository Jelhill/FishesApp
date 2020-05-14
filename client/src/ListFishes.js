import React, {useState, useEffect} from 'react'
import EditFish from './EditFish'

const ListFishes = () => {
    const [fishes, setFishes] = useState([])

    const getFish = async () => {
        try {
            const fetchFishes = await fetch("http://localhost:5000/home")
            const jsonData = await fetchFishes.json()
            setFishes(jsonData)          
        } catch (error) {
            console.log(error)
        } 
    }

    const deleteFish = async (id) => {
        try {
            const fetchFishId = await fetch(`http://localhost:5000/home/${id}`, {method: "DELETE"})
            setFishes(fishes.filter(fish => fish.id !== id ))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFish()
    }, [])

    return (        
        <div className="col-6 my-5">
        {console.log("fishes", fishes)}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            <tbody>

            {fishes.sort((a, b) => a.id - b.id).map((fish, index) => {
                return(
                    <tr key={index}>
                        <td>{fish.id}</td>
                        <td>{fish.name}</td>
                        <td>{fish.type}</td>
                        <td><EditFish fish={fish}/></td>
                        <td><button className="btn btn-danger" onClick={(e) => {
                            e.preventDefault()
                            deleteFish(fish.id)
                        }}>Delete</button></td>
                    </tr>
                )
            })} 
            </tbody>
         </table>
        </div>
    )
}

export default ListFishes