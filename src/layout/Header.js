import { Github, Twitter, Linkedin, Dribbble } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1 className="title">Malcom Green</h1>
                <div className="sub-header">
                    <h4>Ever-growing problem solver & software engineer</h4>
                    <span></span>
                    <div className="socials">
                        <a href="https://github.com/Savvy"><Github size={30} /></a>
                        <a href="https://twitter.com/whoSavvyFN"><Twitter size={30} /></a>
                        <a href="https://www.linkedin.com/in/malcom-green/"><Linkedin size={30} /></a>
                        <a href="https://dribbble.com/whoSavvy"><Dribbble size={30} /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;