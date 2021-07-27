import React from 'react';

const Footer = () => {
    return (
        <div className="container">
            <div className="footer-content">
                <div className="row">

                    <div className="col-sm-3">
                        <div className="single-footer-item">
                            <div className="footer-logo">
                                <a href="index.html">
                                    Gulf<span>Booking</span>
                                </a>
                                <p>
                                    Making your dream Travels True
									</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="single-footer-item">
                            <h2>link</h2>
                            <div className="single-footer-txt">
                                <p><a href="#">home</a></p>
                                <p><a href="#">destination</a></p>
                                <p><a href="#">spacial packages</a></p>
                                <p><a href="#">special offers</a></p>
                                <p><a href="#">blog</a></p>
                                <p><a href="#">contacts</a></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-sm-3">
                        <div className="single-footer-item">
                            <h2>popular destination</h2>
                            <div className="single-footer-txt">
                                <p><a href="#">china</a></p>
                                <p><a href="#">venezuela</a></p>
                                <p><a href="#">brazil</a></p>
                                <p><a href="#">australia</a></p>
                                <p><a href="#">london</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="single-footer-item text-center">
                            <h2 className="text-left">contacts</h2>
                            <div className="single-footer-txt text-left">
                                <p>+1 (300) 1234 6543</p>
                                <p className="foot-email"><a href="#">info@gulfbooking.com</a></p>
                                <p>North Warnner Park 336/A</p>
                                <p>Newyork, USA</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div>
                <div className="foot-icons ">

                    <p>&copy; 2021 GulfBooking. All Right Reserved</p>

                </div>
                <div id="scroll-Top">
                    <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>
			</div>
            </div>
     )
}
export default Footer;

