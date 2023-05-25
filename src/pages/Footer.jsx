import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div class="footer_section layout_padding">
                <div class="container">
                    <div class="footer_logo"><Link to="index.html"><img src="images/footerlogo.png" style={{ height:'200px', width:"200px" }} /></Link></div>
                    <div class="input_bt">
                        <input type="text" class="mail_bt" placeholder="Your Email" name="Your Email" />
                        <span class="subscribe_bt" id="basic-addon2"><Link to="#">Subscribe</Link></span>
                    </div>
                    <div class="footer_menu">
                        <ul>
                            <li><Link to="#">Best Sellers</Link></li>
                            <li><Link to="#">Gift Ideas</Link></li>
                            <li><Link to="#">New Releases</Link></li>
                            <li><Link to="#">Today's Deals</Link></li>
                            <li><Link to="#">Customer Service</Link></li>
                        </ul>
                    </div>
                    <div class="location_main">Help Line  Number : <Link to="#">00923003929585</Link></div>
                </div>
            </div>

            <div class="copyright_section">
                <div class="container">
                    <p class="copyright_text">© 2020 All Rights Reserved. Design by <Link to="home">E-Commerce</Link></p>
                </div>
            </div>
        </>
    )
}

export default Footer;