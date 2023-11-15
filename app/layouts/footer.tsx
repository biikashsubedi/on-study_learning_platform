import React from "react";

export default function Index() {
    return (

        <section className="footer-area pt-100px">
            <div className="container">
                <div className="row">
                    {/* Col 1 */}
                    <div className="col-lg-3 responsive-column-half">
                        <div className="footer-item">
                            <a href="#">
                                <img src="/assets/home/images/logo.png" alt="footer logo" className="footer__logo"/>
                            </a>
                            <ul className="generic-list-item pt-4">
                                <li><a href="tel:+1631237884">+977 9869286303</a></li>
                                <li><a href="mailto:support@wbsite.com">nplearnt@gmail.com</a></li>
                                <li>Kathmandu, Nepal</li>
                            </ul>
                            <h3 className="fs-20 font-weight-semi-bold pt-2 pb-2">We are on</h3>
                            <ul className="social-icons social-icons-styled">
                                <li className="mr-1"><a href="#" className="facebook-bg"><i
                                    className="la la-facebook"></i></a></li>
                                <li className="mr-1"><a href="#" className="instagram-bg"><i
                                    className="la la-instagram"></i></a></li>
                                <li className="mr-1"><a href="#" className="twitter-bg"><i
                                    className="la la-telegram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <div className="col-lg-3 responsive-column-half">
                        <div className="footer-item">
                            <h3 className="fs-20 font-weight-semi-bold">Company</h3>
                            <span className="section-divider section--divider"></span>
                            <ul className="generic-list-item">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 3 */}
                    <div className="col-lg-3 responsive-column-half">
                        <div className="footer-item">
                            <h3 className="fs-20 font-weight-semi-bold">Courses</h3>
                            <span className="section-divider section--divider"></span>
                            <ul className="generic-list-item">
                                <li><a href="#">General Knowledge</a></li>
                                <li><a href="#">History</a></li>
                                <li><a href="#">geography</a></li>
                                <li><a href="#">Sports</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Col 4 */}
                    <div className="col-lg-3 responsive-column-half">
                        <div className="footer-item">
                            <h3 className="fs-20 font-weight-semi-bold">Download App</h3>
                            <span className="section-divider section--divider"></span>
                            <div className="mobile-app">
                                <p className="pb-3 lh-24">Download our mobile app and learn on the go.</p>
                                <a href="#" className="d-block hover-s"><img src="/assets/home/images/googleplay.png"
                                                                             alt="Google play store"
                                                                             className="img-fluid"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Block */}
                <div className="section-block"></div>

                {/* Copyright Content */}
                <div className="copyright-content py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="copy-desc">© 2023 On-Study. All Rights Reserved. by <a
                                    href="#">NPLearnt</a></p>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex flex-wrap align-items-center justify-content-end">
                                    <ul className="generic-list-item d-flex flex-wrap align-items-center fs-14">
                                        <li className="mr-3"><a
                                            href="#">Terms &amp; Conditions</a>
                                        </li>
                                        <li className="mr-3"><a
                                            href="#">Privacy
                                            Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}
