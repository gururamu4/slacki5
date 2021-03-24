import React from 'react'
import './Header.css'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './stateProvider';

function Header() {
    const [{user}, undefined] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    alt = {user?.displayName}
                    src = {user?.photoURL}
                /> 
                <AccessTimeIcon />
            </div>
            <div className="header__center">
                <SearchIcon />
                <input placeholder="search through slack"/>
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
