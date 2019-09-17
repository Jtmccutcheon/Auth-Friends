import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const FriendForm = () => {

    const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' })
    console.log(newFriend)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        console.log(newFriend)
        e.preventDefault();

        axiosWithAuth().post('/friends', newFriend)
            .then(res => {
                console.log(res)
            })
    }



    return (
        <div>
            <form onSubmit={addFriend}>
                <label>name</label><br></br>
                <input type='text' name='name' value={newFriend.name} onChange={handleChange}></input><br></br>
                <label>age</label><br></br>
                <input type='text' name='age' value={newFriend.age} onChange={handleChange}></input><br></br>
                <label>email</label><br></br>
                <input type='text' name='email' value={newFriend.email} onChange={handleChange}></input><br></br>
                <button>add friend</button><br></br>
            </form>

        </div>
    )
}

export default FriendForm;