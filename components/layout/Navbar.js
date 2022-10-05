import styles from '../../styles/navbar.module.css'

import { SunFill } from 'react-bootstrap-icons'

import Link from 'next/link'

const Navbar = () => {
    function toggleTheme() {
        document.getElementsByClassName('App')[0].classList.toggle('dark-theme');
        document.getElementsByClassName('App')[0].classList.toggle('light-theme');
    }
    return (
        <nav className={styles.navbar}>
            <div className={'container'}>
                <div className={styles.navContainer}>
                    <div className={styles.links}>
                        <Link href="/">Home</Link>
                        <Link href="#projects">Projects</Link>
                        <Link href="#uses">Uses</Link>
                        <SunFill className={styles.themeToggle} size={30} onClick={toggleTheme} />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;