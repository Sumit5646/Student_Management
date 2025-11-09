import React, { use } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const UserData = () => {

    const [data, setdata]= useState([])

    useEffect(() => {

        const fetchdata = async ()=>{
            try {
                const response = await axios.get("http://localhost:3000/Student");
                setdata(response.data);
                console.log("Fetched data:", response.data);
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchdata();

    },[]);

   const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this record?")) {
    try {
      await axios.delete(`http://localhost:3000/Student/${id}`);
      const updatedData = data.filter((item) => item.id !== id);
      setdata(updatedData);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  }
};

   
    return (
    <>
   <table className="table table-bordered table-hover table-striped align-middle">
  <thead className="table-dark text-center">
    <tr>
      <th>Sr. No.</th>
      <th>Full Name</th>
      <th>Email</th>
      <th>Contact Number</th>
      <th>Course</th>
      <th>Batch Code</th>
      <th>Joining Date</th>
      <th>Remarks</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody className="text-center">
    {data.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.full_name}</td>
        <td>{item.email}</td>
        <td>{item.contact_number}</td>
        <td>{item.course}</td>
        <td>{item.batch_code}</td>
        <td>{item.joining_date}</td>
        <td>{item.remarks}</td>
        <td>
          {/* Action Buttons */}
          <button
            className="btn btn-sm btn-warning me-2"
          >
           <NavLink to = {`/edit/${item.id}`}> <i className="bi bi-pencil-square"></i></NavLink>
          </button>

          <button
            className="btn btn-sm btn-danger"
            title='Delete'
            onClick={() => handleDelete(item.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </>
  )
}


export default UserData
