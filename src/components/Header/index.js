import './styles.scss';
import logoHP from './logoHP.png';

function Header() {
    return (
        <div className="header">
            <ul className="header_menu">
                <li className="header_menu_link"><a href='#'>Accueil</a></li>
                <li className="header_menu_link"><a href='#'>Sorts</a></li>
                <img src={logoHP} alt="HP logo" />
                <li className="header_menu_link"><a href='#'>Contact</a></li>
                <li className="header_menu_link"><a href='#'>A propos</a></li>
            </ul> 
        </div>
    )
}

export default Header;