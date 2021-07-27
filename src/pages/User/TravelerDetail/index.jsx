import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../../components/Header/index'
import Button from '../../../components/Button/index'
import CategoryBar from '../../../components/CategoryBar/index'
import TravelerDetail from '../../../components/Users/TravelerDetail/index'
import Navbar from '../../../Navbar';
const index = (props) => {
    return (
        <>
        <Navbar/>
        <Header/>
        <div className="container">
            <div className="margin"></div>
            <CategoryBar bar_title={"Traveler Details"} bgcolor={"#375594"} />
            <TravelerDetail/>
            <div className="container center">
                <Link to="/payment">
                    <Button btn_title="Continue" />
                </Link>
            </div>
            <div className="margin" />
        </div>
        </>
    );
};
export default index;
