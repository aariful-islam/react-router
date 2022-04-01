import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const param= useParams();

    return (
        <div>
            <h1>Bole daw sob :{param.id}</h1>
        </div>
    );
};

export default FriendDetails;