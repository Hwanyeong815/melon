import Nav from './Nav';
import { MdMenu } from 'react-icons/md';
import './Header.scss';

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <a href="index.html">
                        <img src="./images/logo.png" alt="" />
                    </a>
                </h1>
                <Nav />
                <p className="all-menu">
                    <i>
                        <MdMenu />
                    </i>
                </p>
            </div>
        </header>
    );
};

export default Header;
