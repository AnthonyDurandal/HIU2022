import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import TableT from '../components/table/TableT';
import './../styles/Accueil.css'

const Accueil = () => {

    const tableData = {
        header: ["Test 1", "Test 2", "Test 3"],
        data: [
            ['A', 'B', 1000],
            ['D', 'E', 4000000.342432]
        ],
        deleteText: "Voulez vous supprimer {} {} {} ?",
        deleteTextData: ["Test 1", "Test 2", "Test 3"],
        numberSeparator: " "
    }

    const info = (index) => {
        console.log("info ", tableData.data[index][0])
    }

    const modif = (index) => {
        console.log('modif', tableData.data[index][0])
    }

    const supprimer = (index) => {
        console.log("delete", tableData.data[index][0])
    }

    return (
        <div className='accueil'>
            <Sidebar/>
            <div className='content'>
                <TableT data={tableData} infoFunction={info} modifyFunction={modif} deleteFunction={supprimer} crud />
            </div>
        </div>
    );
};

export default Accueil;