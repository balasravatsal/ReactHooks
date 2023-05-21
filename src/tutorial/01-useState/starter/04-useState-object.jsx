import {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'peter',
        age: 22,
        hobby: 'read books'
    })

    const displayPerson = () => {
        setPerson({
            name: 'Vatsal',
            age: 20,
            hobby: 'Saving the city'
        })
    }

    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys: {person.hobby}</h4>
            <button className={'btn'} onClick={displayPerson}>Show other details</button>
        </>
    )
};

export default UseStateObject;
