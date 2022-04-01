import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriedns]= useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriedns(data))
    },[])
    return (
        <div>
            {
                friends.map(friend => <Friend
                     friend={friend}
                     key={friend.id}
                     ></Friend>)
            }
        </div>
    );
};

export default Friends;