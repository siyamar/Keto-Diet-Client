import React from 'react';
import DataTable from 'react-data-table-component';
import Navbar from '../../shared/Navbar/Navbar';
import { useState } from 'react';

const ReactDataTable = () => {
    const columns=[
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'Name',
            selector: row => row.name,
            // sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Age',
            selector: row => row.age,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => <button className='btn btn-primary my-1' onClick={()=>alert(row.id)}>Edit</button>,
            // sortable: true
        },
    ];

    const data=[
        {
            id: 1,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 22
        },
        {
            id: 2,
            name: 'Kalam',
            email: 'kalam@asd.com',
            age: 22
        },
        {
            id: 3,
            name: 'Abdul Rahim',
            email: 'abdul@asd.com',
            age: 24
        },
        {
            id: 4,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 20
        },
        {
            id: 5,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 29
        },
        {
            id: 6,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 25
        },
        {
            id: 7,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 22
        },
        {
            id: 8,
            name: 'Kalam',
            email: 'kalam@asd.com',
            age: 22
        },
        {
            id: 9,
            name: 'Abdul Rahim',
            email: 'abdul@asd.com',
            age: 24
        },
        {
            id: 10,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 20
        },
        {
            id: 11,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 29
        },
        {
            id: 12,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 25
        },
        {
            id: 13,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 22
        },
        {
            id: 14,
            name: 'Kalam',
            email: 'kalam@asd.com',
            age: 22
        },
        {
            id: 15,
            name: 'Abdul Rahim',
            email: 'abdul@asd.com',
            age: 24
        },
        {
            id: 16,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 20
        },
        {
            id: 17,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 29
        },
        {
            id: 18,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 25
        },
        {
            id: 19,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 22
        },
        {
            id: 20,
            name: 'Kalam',
            email: 'kalam@asd.com',
            age: 22
        },
        {
            id: 21,
            name: 'Abdul Rahim',
            email: 'abdul@asd.com',
            age: 24
        },
        {
            id: 22,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 20
        },
        {
            id: 23,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 29
        },
        {
            id: 24,
            name: 'Abdul',
            email: 'abdul@asd.com',
            age: 25
        },
    ];

    const [records, setRecords] = useState(data)

    const handleFilter= e=>{
        const newData = data.filter(row=>{
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
           <div className='m-10'>
           <h2>This React Data Table</h2>
           {/* <div className='text-end'><input type="text" /></div> */}
            <DataTable
                title= 'StudentInfo'
                columns={columns}
                // data={data}
                data={records}
                selectableRows
                selectableRowsHighlight
                fixedHeader
                fixedHeaderScrollHeight='300px'
                pagination
                highlightOnHover
                actions={<button className='btn btn-info'>Export</button>}
                subHeader
                subHeaderComponent={
                    <input 
                    type="text"
                    placeholder='Search here'
                    className='w-1/4 form-control rounded-lg'
                    onChange={handleFilter}
                    />
                }
                // subHeaderAlign='left'
            ></DataTable>
           </div>
        </div>
    );
};

export default ReactDataTable;