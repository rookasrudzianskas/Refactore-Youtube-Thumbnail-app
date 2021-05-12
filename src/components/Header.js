import React from 'react';
import "./styles/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Header = () => {
    return (
        <div className="header">
            <div className="header__leftSide">
               <MenuIcon />
                <img className="header__logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt=""/>
            </div>
        {/*    Youtube logo*/}
            <div className="header__search">
                <TextField className="header__input" placeholder="Search" variant="outlined" type="text"/>
                <Button className="header__searchButton">
                    <SearchIcon />
                </Button>
            </div>
        {/*    Search box   */}
            <div className="header__rightLogos">
                <h1>Right side</h1>
            </div>
        {/*    Right side logo  */}
        </div>
    );
};

export default Header;
