import React from 'react'
import RoomTable from './RoomTable/index'
import HotelTable from './HotelTable/index'
import MealTable from './MealTable/index'
import BottomButtom from '../BottomButton/index'
import SideBar from '../../components/AdminDashboard/SideBar';
import Header from '../../components/AdminDashboard/Header';
const index= ()=>{
    return(
            <div className="skin-blue sidebar-mini">
                <Header />
                <SideBar />
        <div className="container">
            <RoomTable/>
            <HotelTable/>
            <MealTable/>
            <BottomButtom prevPath={"days-detail"} nextPath={"package-detail"}/>
        </div>
        </div>
    )
}
export default index;