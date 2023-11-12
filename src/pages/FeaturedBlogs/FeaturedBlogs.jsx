import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const blogs = useLoaderData();
  blogs.sort((a, b) => b.longDescription.length - a.longDescription.length);
  const topPosts = blogs.slice(0, 10);

  const columns = [
    {
      name: "Serial Number",
      selector: (row) => row.serialNumber,
    },
    {
      name: "Blog Title",
      selector: (row) => row.title,
    },
    {
      name: "Blog Owner",
      selector: (row) => row.displayName,
    },
    {
      name: "Profile Picture",
      selector: (row) => <img className='w-10 rounded-full' src={row.photoURL} alt="profile" />,
    },
  ];

  const data = topPosts.map((topPost, index) => ({
    serialNumber: index + 1,
    title: topPost.title,
    displayName: topPost.user?.displayName,
    photoURL: topPost.user?.photoURL,
  }));

  const [records, setRecords] = useState(data)

    const handleFilter= e=>{
        const newData = data.filter(row=>{
            return row.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newData)
      }
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <Navbar></Navbar>

      <div className="my-6 mx-20">
        <DataTable
          title= 'Top 10 posts'
          columns={columns}
          data={records}
          selectableRows
          selectableRowsHighlight
          fixedHeader
          fixedHeaderScrollHeight='350px'
          highlightOnHover
          subHeader
          subHeaderComponent={
                    <input 
                    type="text"
                    placeholder='Search here'
                    className='w-1/4 form-control rounded-lg'
                    onChange={handleFilter}
                    />
                }
        ></DataTable>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default FeaturedBlogs;
