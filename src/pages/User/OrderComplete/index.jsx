import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/index'
import Button from '../../../components/Button/index'
import CategoryBar from '../../../components/CategoryBar/index'
const index = (props) => {
    return (
        <div className="container">
            <Header />
            <CategoryBar bar_title={"Completed"} bgcolor={"green"} />
            <div className="container">
                <div className="container finalcontainer">
                    <h4>Thank you, your booking has been completed.</h4>
                    <h4>Check your email, the confirmation travel voucher has been sent.</h4>
                </div>
            </div>
            <div className="container center">
                <Link to="">
                    <Button btn_title="Ok" />
                </Link>
            </div>
            <div className="margin" />
        </div>
    );
};
export default index;
