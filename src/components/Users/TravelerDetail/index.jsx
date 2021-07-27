import React, { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import TextInput from '../../TextInput/index'
const Index = () => {

    return (
        <div className="container">
            <div class="row">
                <TextInput name={"fname"} placeholder={"Enter First Name"} />
                <TextInput name={"lname"} placeholder={"Enter Last Name"} />
            </div>
            <div class="margin"></div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <textarea rows="6" name="description" class="textarea form-control" placeholder="Address"></textarea>
                </div>
            </div>
            <div class="margin"></div>
            <div class="row">
                <TextInput name={"email"} placeholder={"Enter Email"} />
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <PhoneInput
                        country={'pk'}
                    />
                </div>
            </div>
        </div>
    );
};
export default Index;
