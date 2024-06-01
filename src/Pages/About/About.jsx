import Footer from "../../components/Footer/Footer";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import './About.css'

function About() {
    return (
        <div>
            <MyNavbar />
            <div className="about-us mb-5 py-5">
                <h1>درباره ما</h1>
                <p>به محتوا پلاس خوش آمدید!</p>
                <p>
                    ما در محتوا پلاس به ارائه محتوای با کیفیت و ارزشمند برای کاربران خود افتخار می‌کنیم.
                    هدف ما ارتقاء دانش و آگاهی جامعه در زمینه‌های مختلف است.
                </p>
                <p>
                    تیم ما متشکل از متخصصین با تجربه و علاقه‌مند به اشتراک‌گذاری دانش است.
                    ما همیشه به دنبال ارائه بهترین و به‌روزترین اطلاعات برای شما هستیم.
                </p>
                <h2>تماس با ما</h2>
                <p>اگر سوال یا پیشنهادی دارید، می‌توانید از طریق اطلاعات زیر با ما در تماس باشید:</p>
                <ul>
                    <li>ایمیل: info@mohtavaplus.com</li>
                    <li>تلفن: 123-456-7890</li>
                </ul>
            </div>
            <Footer />
        </div>

    )
}

export default About;