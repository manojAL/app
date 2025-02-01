import './Footer.css';
function Footer(){
    return (
        <div className="footer">
            <section className='space-sec'></section>
            <section className='content-sec'>
                
                    <div className="volunteer">
                        <div className="volunteer-logo"><h1 className='volunteer-heading'>MOZILLA CLUB</h1></div>
                        <div className="description">
                            <p>Mozilla Club is a dynamic technical club at our college, dedicated to fostering innovation, open-source contributions, and technical excellence. As part of the global Mozilla community, we aim to empower students by organizing workshops, hackathons, and technical events focused on web technologies, open-source development, and internet privacy. Our mission is to cultivate a collaborative environment where students can enhance their technical skills, contribute to real-world projects, and advocate for an open and accessible internet. Join us to learn, innovate, and grow with a like-minded community of tech enthusiasts! 🚀🔥</p>
                        </div>
                    </div>
                    <div className="sitemap">
                        <h2 className='h2'>SiteMap</h2>
                        <div className="elementor-widget-container">
                        <ul className="widgets">
                            <li>Home</li>
                            <li>About</li>
                            <li>Faculty coordinator</li>
                            <li>Coordinators</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                        </div>
                    </div>
                    <div className="address">
    <div className='address-heading'><h2>LOCATION</h2></div>
    <div className="info-col-wrap">
        <div><span></span><i className='address-logo'></i></div>
        <div className="address-content">
            <h3>Find us at</h3>
            <p>VIT BHOPAL</p>
        </div>
    </div>
</div>

                    <div className="connectwithus">
                        <div><h2>Connect with us</h2></div>
                        <div className="wgl-infobox">
                            <div className="icon-wrapper"><span className="wgl-icon"><i className="icon">mozilla@vitbhopal.ac.in</i></span></div>
                            <div className="content-wrapper"><p className="content">+91 8660901092</p></div>
                        </div>
                        <div className="social-icons">
                            <span><a><i className='fab fa-facebook'></i></a></span>
                            <span><a><i className='fab fa-twitter'></i></a></span>
                            <span><a><i className='fab fa-youtube'></i></a></span>
                            <span><a><i className='fab fa-instagram'></i></a></span>
                            <span><a><i className='fab fa-linkedin'></i></a></span>
                        </div>
                    </div>
                
            </section>
            <section className='line'>
                <div className='elementor-widget-container'>
                    <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
                </div>
            </section>
            <section className='bottom'>
                <div className='elementor-widget-wrap'>
                    <div className='termsndcond'><p>terms and conditions</p></div>
                    <div className="delimiter"></div>
                    <div className='privacy'><p>privacy policy</p></div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2022 Volunteer For India by <span><a>Kitbe</a></span>.All right reserved</p>
                </div>
            </section>
        </div>
    )
}
export default Footer;