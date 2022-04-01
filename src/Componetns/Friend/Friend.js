import React from 'react';
import { useNavigate } from 'react-router-dom';


const Friend = (props) => {
    const {name,id, username}=props.friend
    const navigate = useNavigate();
    const details=()=>{
        const path=`/friends/${id}`
        navigate(path);
    }
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={details}>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;