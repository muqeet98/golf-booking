import React, { useEffect } from 'react';
import RadioButton from './RadioButton/index'
import TextInput from '../../TextInput/index'
const index = () => {
    return (
        <div className="container">
            <RadioButton />
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <input type="text" name="fname" class="form-control"
                        placeholder="Enter your Credit card Number"></input>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <input type="text" name="lname" class="form-control"
                        placeholder="Expiry Date"></input>
                </div>
            </div>
            <div className="margin"></div>
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <input type="text" name="fname" class="form-control"
                        placeholder="Name of the Card"></input>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 ">
                    <input type="text" name="lname" class="form-control"
                        placeholder="CCV"></input>
                </div>
            </div>
        </div>
    );
};
export default index;
