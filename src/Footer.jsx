import './Footer.css';
function Footer(){
    return (
        <div className="footer">
            <section className='space-sec'></section>
            <section className='content-sec'>
                
                    <div className="volunteer">
                        <div className="volunteer-logo"><h1 className='volunteer-heading'>Volunteer</h1></div>
                        <div className="description">
                            <p>Volunteer for India is an initiative of Society for Promotion of Volunteerism, a registered non profit organization (TVM/TC/45/2021) under the The Travancore-Cochin Literary, Scientific and Charitable Societies Registration Act, 1955, working towards promoting volunteerism.</p>
                        </div>
                    </div>
                    <div className="sitemap">
                        <h2 className='h2'>SiteMap</h2>
                        <div className="elementor-widget-container">
                        <ul className="widgets">
                            <li>Home</li>
                            <li>About</li>
                            <li>Volship</li>
                            <li>Partners</li>
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
            <h3>Head Office</h3>
            <p>TC 7/1200, Chittatinkara, Vattiyoorkavu P.O.,Trivandrum 695013</p>
        </div>
    </div>
</div>

                    <div className="connectwithus">
                        <div><h2>Connect with us</h2></div>
                        <div className="wgl-infobox">
                            <div className="icon-wrapper"><span className="wgl-icon"><i className="icon">admin@volunteerforindia.com</i></span></div>
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