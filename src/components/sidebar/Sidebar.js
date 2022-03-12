import React from 'react';
import SidebarItem from './SidebarItem';
import items from './../../data/sidebar.json'
import './../../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='app-logo'>
                LOGO
            </div>
            {items.map((item, index) => <SidebarItem key={index} item={item}/>) }
        </div>
    );
};

export default Sidebar;