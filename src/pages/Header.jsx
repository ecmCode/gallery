import { Link } from "react-router-dom";
import {BiMenuAltRight} from "react-icons/bi";
import {TfiGallery} from "react-icons/tfi";

import style from "./Header.module.css"
import { useState } from "react";

const Header = () => {

    const [showMenu,setShowMenu] = useState(false)
    return(
        <div className={style.header}>
            
            <div className={style.logo}>
                <TfiGallery/>
                <div>
                    <span>My</span>
                    <br/>
                    Gallery
                </div>
            </div>
            <div className={style.menu}>
                <BiMenuAltRight
                className={showMenu? style.menuOn : ''}
                onClick={() => setShowMenu(show => !show)}/>
                <div className={showMenu? style.navShow : style.navHide}>
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
        );
    
};

export default Header;
