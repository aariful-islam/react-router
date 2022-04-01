import React from 'react';

const Friend = (props) => {
    const {name,id, username}=props.friend
    return (
        <div>
            <h2>{name}</h2>
            <button>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;