import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        
        <div className='header'>
            
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/friends">Friends</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            
            
        </div>
    );
};

export default Header;