import './styles.scss';
import poufsoufle from './poufsoufle.png';
import gryffondor from './gryffondor.png';
import logoHP from './logoHP.png';
import serpentard from './serpentard.png';
import serdaigle from './serdaigle.png';

function Header() {
    return (
        <div className="header">
            <div className="left--part">
                <img className="img--edge" src={poufsoufle} alt="HP logo" />
                <img className="img--center" src={gryffondor} alt="HP logo" />
            </div>
            <div className="middle">
                <img src={logoHP} alt="HP logo" />
            </div>
            <div className="right--part">
                <img className="img--center" src={serpentard} alt="HP logo" />
                <img className="img--edge-s" src={serdaigle} alt="HP logo" />
            </div>
            
        </div>
    )
}

export default Header;