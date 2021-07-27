import React from "react";
import HomePage from '../pages/HomePage/index';
import About from '../pages/About/index';
import SeeMore from '../pages/User/SeeMore/index'
import Login from '../pages/Login/index'
import Register from '../pages/Register/index'
import AddPackages from '../pages/DMC/AddPackages/index'
import DaysDetails from '../pages/DMC/DaysDetails/index'
import Pricing from '../pages/DMC/Pricing/index'
import PackageDetails from '../pages/DMC/PackageDeatils/index'
import ConfirmSelection from '../pages/User/ConfirmSelection/index'
import TravelerDetail from '../pages/User/TravelerDetail/index'
import Payment from '../pages/User/Payment/index'
import OrderComplete from '../pages/User/OrderComplete/index'
import Dashboard from '../pages/DMC/Dashboard/index'
import Chart from '../pages/DMC/Dashboard/Chart/index'
import OrderList from '../pages/DMC/Dashboard/OrderList/index'

import Earning from '../pages/DMC/Earning/index'
import Packages from '../pages/DMC/Packages/index'
import PackageList from '../pages/DMC/Dashboard/PackageList/index'

import AdminDashboard from "../components/AdminDashboard/AdminHome.jsx";



 const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '/see-more',
        component: SeeMore,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    },
    {
        path: '/add-packages',
        component: AddPackages,
        exact: true
    },
    {
        path: '/days-detail',
        component: DaysDetails,
        exact: true
    },
    {
        path: '/pricing',
        component: Pricing,
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        exact: true
    },
    {
        path: '/earning',
        component: Earning
        ,
        exact: true
    },
    {
        path: '/package',
        component: Packages,
        exact: true
    },
    {
        path: '/package-list',
        component: PackageList,
        exact: true
    },
    {
        path: '/chart',
        component: Chart,
        exact: true
    },
    {
        path: '/order-list',
        component: OrderList,
        exact: true
    },

    {
        path: '/package-detail',
        component: PackageDetails,
        exact: true
    },
    {
        path: '/confirm-selection',
        component: ConfirmSelection,
        exact: true
    },
    {
        path: '/traveler-detail',
        component: TravelerDetail,
        exact: true
    },
    {
        path: '/payment',
        component: Payment,
        exact: true
    },
    {
        path: '/order-complete',
        component: OrderComplete,
        exact: true
    },


    {
        path: '/admin-dashboard',
        component: AdminDashboard,
        exact: true
    },
]
export default routes;