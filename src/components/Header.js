import logo from "../assets/images/logo.svg";
import menuImg from "../assets/images/icon-menu.svg";

function Header(){
    return <>
        <header>
            <img src={logo} alt="logo"/>
            <div className="menu">
                <ul>
                    <li><a href="#1">Home</a></li>
                    <li><a href="#2">New</a></li>
                    <li><a href="#3">Polular</a></li>
                    <li><a href="#4">Tredding</a></li>
                    <li><a href="#5">Categories</a></li>
                </ul>
                
            </div>
            <div className="menu-mobile">
                    <a href="##">
                    <img src={menuImg} target="menu"/>
                    </a>
                </div>
        </header>
    
    </>
}

export default Header;