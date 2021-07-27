import React from 'react';
import PackageDetail from '../../../components/PackageDetail/index';
import BottonButton from '../../../components/BottomButton/index'
import Navbar from '../../../Navbar';
import Header from '../../../components/AdminDashboard/Header';
import SideBar from '../../../components/AdminDashboard/SideBar';
const index = (props) => {
    return (
        <div>
            <div className="skin-blue sidebar-mini">
                <Header />
                <SideBar />
                <div className="container">
                    <PackageDetail rows={"4"} placeholder={"Description"} title={"Package Includes"} />
                    <PackageDetail rows={"4"} placeholder={"Description"} title={"Package Excludes"} />
                    <PackageDetail rows={"4"} placeholder={"Description"} title={"Booking terms and policies"} />
                    <PackageDetail rows={"4"} placeholder={"Description"} title={"Payment & Refund policy"} />
                    <PackageDetail rows={"4"} placeholder={"Description"} title={"Cancelation & No-show policy"} />
                    <BottonButton prevPath={"pricing"} nextPath={""} />
                </div>
            </div>
        </div>
    );
};
export default index;
