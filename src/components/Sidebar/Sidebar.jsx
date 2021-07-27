import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { useHistory, useLocation } from 'react-router-dom';
import { Home , List,Favorite, ArrowLeftRounded, ArrowBack, ArrowBackRounded, ArrowForwardRounded, MenuOpen,  } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { NavLink } from "../../Navbar/styles";
const Sidebar = () => {
	const history = useHistory();
	const location = useLocation();
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext" onClick={menuIconClick}>
            </div>
            <div className="closemenu" onClick={menuIconClick}>

              {menuCollapse ? (
                  <MenuItem icon={<MenuIcon />} ></MenuItem>
                  ) : (
                    <MenuItem icon={<MenuIcon/>}></MenuItem>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<Home />} onClick={()=> history.push({pathname: '/package-list'})}>
                Home
              </MenuItem>
              <MenuItem icon={<List/>} onClick={() => history.push({pathname: '/order-list'})}>List</MenuItem>
              <MenuItem icon={<Favorite />}>Favourite</MenuItem>
              <MenuItem icon={<Home />} onClick={()=> history.push({pathname: '/chart'})}>Graph</MenuItem>
              <MenuItem icon={<Home />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<List />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default Sidebar;