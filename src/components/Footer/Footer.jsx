import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Image/logo.jpg'
import { NavLink } from 'react-bootstrap';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section footer-logo">
                    <img src={logo} />
                </div>
                <div className="footer-section footer-links">
                    <h3>لینک‌های مفید</h3>
                    <ul>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">تماس با ما</a></li>
                        <li><a href="#">شرایط استفاده</a></li>
                    </ul>
                </div>
                <div className="footer-section footer-contact">
                    <h3>تماس با ما</h3>
                    <p>ایمیل: info@mohtavaplus.com</p>
                    <p>تلفن: 123-456-7890</p>
                    <div className="footer-social">
                        <ul>
                            <li><a href="#"><FaInstagram /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaYoutube /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>تمامی حقوق محفوظ است &copy; 2024 محتواپلاس</p>
            </div>
        </footer>
    );
}

export default Footer;
