import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/index'
import Button from '../../../components/Button/index'
import CategoryBar from '../../../components/CategoryBar/index'
import Payment from '../../../components/Users/Payment/index'
import Navbar from '../../../Navbar';
const index = (props) => {
    return (
        <>
        <Navbar/>
            <Header />
        <div className="container">
            <CategoryBar bar_title={"Payment"} bgcolor={"#375594"} />
            <Payment />
            <div className="container center">
                <Link to="order-complete">
                    <Button btn_title="Save and Proceed" />
                </Link>
            </div>
            <div className="margin" />
        </div>
        </>
    );
};
export default index;
