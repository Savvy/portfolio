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
                    <p>&copy; {new Date().getFullYear()} <strong>Malcom Green</strong></p>
                    <p>Crafted with ❤️ by <strong>Malcom</strong></p>
                </footer>
            </div>
        </div>
    );
}

export default Footer;