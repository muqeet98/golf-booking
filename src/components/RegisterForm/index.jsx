import { NavLink } from 'react-router-dom';
import Button from '../Button/index'
import CountryPicker from '../CountryPicker/index'
const index = () => {
    return (
        <div className="container">
            <div class="row">
                <div class="col-lg-6 col-md-3 col-sm-4">
                    <h2>Welcome to Gulf Booking</h2>
                    <img src="https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=6&m=535695503&s=612x612&w=0&h=uP8aDK4xlfjk3kEiyr9wwUiuh80UwAiICweFpiBDosk=" class="imageProps"></img>
                </div>
                <div class="col-lg-5 col-md-4 col-sm-12">
                    <div class="single-tab-select-box">
                        <h3>New to Gulf Booking?</h3>
                        <h2 class="text">Hotel Name</h2>
                        <input type="Email" name="travel-email" class="form-control" ></input>
                        <h2 class="text">Country</h2>
                        <CountryPicker />
                        <h2>Location</h2>
                        <input type="Location" name="travel-location" class="form-control" ></input>
                        <h2 class="text">Company Name</h2>
                        <input name="travel-company" class="form-control" ></input>
                        <h2 class="text">Address</h2>
                        <input type="Address" name="travel-address" class="form-control" ></input>
                        <h2 class="text">Telephone</h2>
                        <input type="telephone" name="travel-telephone" class="form-control" ></input>
                        <h2 class="text">Mobile No</h2>
                        <input type="mobile" name="travel-mobile" class="form-control" ></input>
                        <h2 class="text">Hotel Email</h2>
                        <input type="email" name="travel-email" class="form-control" ></input>
                        <h2 class="text">Forgot Password? </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="about-btn travel-mrt-0 col-lg-6 col-md-3 col-sm-4">
                    <Button btn_title={"Sign In"} />
                </div>
                <div class="about-btn travel-mrt-0 col-lg-5 col-md-4 col-sm-12">
                    <NavLink to="/add-packages">
                        <Button btn_title={"Countinue"} />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
export default index;