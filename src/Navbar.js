
import { SunFill } from 'react-bootstrap-icons';

const Navbar = () => {
    function toggleTheme() {
        document.getElementsByClassName('App')[0].classList.toggle('dark-theme');
        document.getElementsByClassName('App')[0].classList.toggle('light-theme');
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="links">
                    <a href="/">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#uses">Uses</a>
                    <SunFill className='theme-toggle' size={30} onClick={toggleTheme} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;