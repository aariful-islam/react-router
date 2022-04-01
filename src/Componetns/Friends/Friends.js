import React, { useEffect, useState } from 'react';

const Friends = () => {
    const [friends, setFriedns]= useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Friends;