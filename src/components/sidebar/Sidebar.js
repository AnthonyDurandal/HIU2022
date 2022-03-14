import React from 'react';
import SidebarItem from './SidebarItem';
import items from './../../data/adminSidebar.json'
import './../../styles/Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='app-logo'>
                <img src="./img/syringe.png" width="50" height="50" alt=""></img>
                <div className="logo-text">  <a href="/Sensibilisation">ValizyRoulety2022</a></div>
            </div>
            {props.data.map((item, index) => <SidebarItem key={index} item={item}/>) }
        </div>
    );
};

export default Sidebar;