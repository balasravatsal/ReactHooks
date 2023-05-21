import {useEffect, useState} from 'react';

const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url)
                const user = await response.json()
                console.log(user)
            } catch (e) {
                console.log(e)
            }
        }

        fetchUser()
    }, [])


    return (
        <h2></h2>


    );
};
export default MultipleReturnsFetchData;
