import {data} from '../../../data.js'
import {useState} from "react";

const UseStateArray = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        // const newPeople =
        setPeople(people.filter((person) => person.id !== id))
    }
    const removeAll = () => {
        setPeople([])
    }


    return <>
        {people.map((person) => {
            const {id, name} = person
            return (
                <div key={id}>
                    <h4>{name}</h4>
                    <button type={'button'} onClick={() => {
                        removeItem(id)
                    }}>remove
                    </button>
                </div>
            )
        })}
        <button className="btn" type={'button'} style={{marginTop: '3rem'}} onClick={removeAll}>Remove all</button>
    </>


};

export default UseStateArray;
