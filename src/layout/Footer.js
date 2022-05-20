import { ReactComponent as Logo } from '../icons/Malcom.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>
                <hr />
                <footer>
                    <p>&copy; 2022 <span>Malcom Green</span></p>
                    <p>Crafted with ❤️ by Malcom</p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;