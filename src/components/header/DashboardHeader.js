import React from 'react';
import { Navbar, Container } from "react-bootstrap"
import './../../styles/DashboardHeader.css'

const DashboardHeader = () => {
    return (
        <div className='dashboard-header'>
            <Navbar bg="light" style={{height: '56px'}}>
                <Container>
                    {/* <Navbar.Brand href="#home">Brand link</Navbar.Brand> */}
                </Container>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;