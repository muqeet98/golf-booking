import React, {Component} from 'react'

import Header from './Header'
import SideBar from './SideBar'
import PackageList from '../../pages/DMC/Dashboard/PackageList/index';
import OrderList from '../../pages/DMC/Dashboard/OrderList/index';
import Chart from '../../pages/DMC/Dashboard/Chart/index'
import { useState } from 'react';
import { Alert } from 'bootstrap';
import { useLocation } from 'react-router-dom';

const AdminDashboard = () => {

  const [item, setItem] = useState('Home');
  const location = useLocation();
  const callbackFunction = (childData) => {
    setItem(childData)
    console.log("Hello Boys")
}

  return (
<div>
    <div className="skin-blue sidebar-mini">
    <Header />
    {localStorage.getItem('toggle') == 'open' ?
    <SideBar parentCallback = {callbackFunction}/>
    : null }
    {item == 'Home' ? <PackageList/> : null }
    {item == "List" ? <OrderList/> : null}
    {item == "Graph" ?<Chart/> : null }
  </div>
  <label>Hello {location.pathname}</label>
</div>
  );
}
export default AdminDashboard;
