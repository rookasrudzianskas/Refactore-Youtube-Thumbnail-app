import React from 'react';
import "./styles/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt=""/>
            </div>
        {/*    Youtube logo*/}
            <div className="header__search">
                <input type="text"/>
                <button>Icon</button>
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
