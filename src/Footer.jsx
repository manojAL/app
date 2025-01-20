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
                    <div className="location">
                        <div className='location-heading'><h2>LOCATION</h2></div>
                        <div className="elementor-col-wrap">
                            <div className="location-logo"></div>
                            <div className="location-content">
                                <h3>Head Office</h3>
                                <p>TC 7/1200, Chittatinkara, Vattiyoorkavu P.O.,Trivandrum 695013</p>
                            </div>
                        </div>
                    </div>
                    <div className="connectwithus">
                        <h2>Connect with us</h2>
                        <div className="wgl-infobox">
                            <div className="icon-wrapper"><span className="wgl-icon"><i className="icon"></i></span></div>
                            <div className="content-wrapper"><p className="content"></p></div>
                        </div>
                        <div className="social-icons">
                            <span><a></a></span>
                            <span><a></a></span>
                            <span><a></a></span>
                            <span><a></a></span>
                            <span><a></a></span>
                        </div>
                    </div>
                
            </section>
            <section>
                <div>
                    <div className="elementor-divider"><span className="elementor-divider-separator"></span></div>
                </div>
            </section>
            <section>
                <div>
                    <div><p></p></div>
                    <div className="delimiter"></div>
                    <div></div>
                </div>
                <div></div>
            </section>
        </div>
    )
}
export default Footer;