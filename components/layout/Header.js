import styles from '../../styles/header.module.css'

import { Github, Twitter, Linkedin, Dribbble } from 'react-bootstrap-icons';
// import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <h1 className={styles.title}>Malcom Green</h1>
                <div className={styles.subHeader}>
                    <h4>Ever-growing problem solver & software engineer</h4>
                    <span></span>
                    <div className={styles.socials}>
                        <a href="https://github.com/Savvy"><Github size={30} /></a>
                        <a href="https://twitter.com/malcomthedev"><Twitter size={30} /></a>
                        <a href="https://www.linkedin.com/in/malcom-green/"><Linkedin size={30} /></a>
                        <a href="https://dribbble.com/malcomgreen"><Dribbble size={30} /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;