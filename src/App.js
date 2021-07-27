import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import AppRouter from './Router/index'
import Header from './components/AdminDashboard/Header.jsx'
import SideBar from './components/AdminDashboard/SideBar.jsx'
import PackageList from './pages/DMC/Dashboard/PackageList'
function App() {
  return (
    <AppRouter/>
  );
}
export default App;
