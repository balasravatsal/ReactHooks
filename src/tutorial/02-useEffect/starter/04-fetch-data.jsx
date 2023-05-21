import {useEffect, useState} from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch(url)
                // console.log(response.json())
                const users = await response.json()
                // console.log(users)
                setUsers(users)
            } catch (e){
                console.log(e)
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <h3>Github Users</h3>
            <ul className="users">
                {users.map((user) => {
                    const { id, login, avatar_url, html_url } = user;
                    return <li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <div>
                            <h5>{login}</h5>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
};

export default FetchData;
