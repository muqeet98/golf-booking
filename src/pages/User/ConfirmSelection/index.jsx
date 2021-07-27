import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/index'
import Button from '../../../components/Button/index'
import CategoryBar from '../../../components/CategoryBar/index'
import ConfirmSelection from '../../../components/Users/ConfirmSelection/index'
import Navbar from '../../../Navbar';
const index = () => {
    return (
        <>
        <Navbar/>
            <Header />
        <div className="container">
            <CategoryBar bar_title={"Confirm Selection"} bgcolor={"#375594"} />
            <ConfirmSelection />
            <div className="container">
                <div className="row container ">
                    <button className="cal-button pull-left h2-tag">Click To Calculate Total</button>
                </div>
                <div className="margin">
                </div>
                <div className="row container">
                    <h4>1800 USD</h4>
                </div>
            </div>
            <div className="container center">
                <Link to="/traveler-detail">
                    <Button btn_title="Continue" />
                </Link>
            </div>
            <div className="margin" />
        </div>
        </>
    );
};
export default index;
