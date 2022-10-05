import styles from '../../styles/Footer.module.css'

import Image from 'next/image';
// import { ReactComponent as Logo } from '../icons/Malcom.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={'container'}>
                <div className={styles.logo}>
                    <Image
                        src="/icons/Malcom.svg"
                        alt='Malcom Logo'
                        layout='fill'
                    />
                </div>
                <hr />
                <footer className={styles.copyright}>
                    <p>&copy; {new Date().getFullYear()} <strong>Malcom Green</strong></p>
                    <p>Crafted with ❤️ by <strong>Malcom</strong></p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;