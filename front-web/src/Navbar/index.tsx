import './styles.css';
import {ReactComponent as LogoMoto } from './LogoMoto.svg';

function Navbar(){
    return (
    <nav className="main-navbar">
        <LogoMoto />
        <a href="home"className="logo-text"> DS Delivery</a>
    </nav>
    )
}

export default Navbar;