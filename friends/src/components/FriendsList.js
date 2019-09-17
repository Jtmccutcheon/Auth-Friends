import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendForm from './FriendForm';


const FriendsList = () => {

    const [friends, setFriends] = useState([])


    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res)
                const friends = res.data
                setFriends(friends)
            })
    }, [])

    return (
        <div>
            <h1> friends list: </h1>
            <FriendForm />
            {friends.map(f => {
                console.log(f)
                return (
                    <div className='friend-card' key={f.id}>
                        {/* <p>id: {f.id}</p> */}
                        <p>name: {f.name}</p>
                        <p>age: {f.age} </p>
                        <p>email: {f.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendsList;