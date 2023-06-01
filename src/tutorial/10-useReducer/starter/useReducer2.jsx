import { useState } from "react"
import { data } from "../../../data"

const useReducer2 = () => {

    const [name, setName] = useState('')
    const [people, setPeople] = useState(data)
    const [showModal, setShowModal] = useState(false)



    return (
        <>
            {showModal && <Model />}
        </>
    )

}

export default useReducer2

