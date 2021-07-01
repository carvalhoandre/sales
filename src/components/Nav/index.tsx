import Image from '../../assets/car-header.png'
import Logo from '../../assets/logoP.png'

const Nav = () => {
    return (
        <div className="content">
            <nav>
                <div className="logo_header">
                    <img src={Logo} alt="logo" className="logo" />
                    <p className="brand">ac<strong>sales</strong></p>
                </div>
                <ul>
                    <li><a href="#catalog">Catalog</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <button>Login</button>
                </ul>
            </nav>
            <div className="header-block">
                <div className="text">
                    <h2>The perfect car for you</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quaerat?</p>
                </div>
                <img src={Image} alt="Car" />
            </div>
        </div>
    )
}

export default Nav