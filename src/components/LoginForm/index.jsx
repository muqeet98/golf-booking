import {  useHistory, useLocation} from "react-router-dom";
const LoginForm = (props) => {
    const history = useHistory();
    const location = useLocation();
    const Toggle =() => {
       localStorage.setItem('toggle', 'open');
       history.push({pathname: '/admin-dashboard'})
    }
    return (
        <div>
            <section className="travel-box">
                <div className="container">
                    <div className="tab-para">
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-12">
                                <div className="single-tab-select-box">
                                    <h2 className="text">Travel Agent Type</h2>
                                    <div className="travel-select-icon">
                                        <select className="form-control ">
                                            <option value="default">Select Supplier type</option>
                                            <option value="turkey">Accomodation</option>
                                            <option value="russia">DMC</option>
                                            <option value="egept">Car Rental</option>
                                        </select>
                                    </div>
                                    <h2 className="text">Email</h2>
                                    <input type="Email" name="travel-email" className="form-control" ></input>
                                    <h2 className="text">Password</h2>
                                    <input type="Password" name="travel-password" className="form-control" ></input>
                                    <h2 className="">Forgot Password? </h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-4">
                                <h1>Register as a Travel Agent</h1>
                                <p>
                                    GulfBooking.com - a simple way to build a robust
                                    revenue model for your businness amd a perfect complentation
                                    to the sales strategy. Despite iy is the peak or off seasons,
                                    you will be able to maximize profitability and generate
                                    advanced B2B leads. Fuel your growth our high-end reservation
                                    system.
						            </p>
                            </div>
                        </div>
                        <div className="row">
                                <div className="about-btn travel-mrt-0 col-lg-5 col-md-4 col-sm-12">

                                        <button onClick={Toggle} className="about-view travel-btn">
                                            Sign in
									    </button>
                                </div>
                                <div className="about-btn travel-mrt-0 col-lg-6 col-md-3 col-sm-4">
                                        <button className="about-view travel-btn" >
                                            Create an account
									    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;
