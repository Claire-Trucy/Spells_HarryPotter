import './styles.scss';
import logoHP from './logoHP.png';
import { useState } from 'react';

function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <div className={`header ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="header_logo">
                <img src={logoHP}></img>
            </div>
            <ul className="header_links">
                <li className="header_item slideInDown-1">
                    <a href='#' className="header_link">Accueil</a>
                </li>
                <li className="header_item slideInDown-2">
                    <a href='#' className="header_link">Sorts</a>
                </li>
                <li className="header_item slideInDown-3">
                    <a href='#' className="header_link">Contact</a>
                </li>
                <li className="header_item slideInDown-4">
                    <a href='#' className="header_link">A propos</a>
                </li>
            </ul> 
            <button className="header_burger">
                <span className="burger-bar" onClick={handleShowLinks} ></span>
            </button>
        </div>
    )
}

export default Header;