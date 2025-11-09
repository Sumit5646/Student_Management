import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [data, setdata] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    course: "",
    batch_code: "",
    joining_date: "",
    remarks: ""
  });

  const datahandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const saveform = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/Student", data);
      console.log("Data saved successfully:", response.data);
      alert("Form Submitted Successfully!");

      setdata({
        full_name: "",
        email: "",
        contact_number: "",
        course: "",
        batch_code: "",
        joining_date: "",
        remarks: ""
      });
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center mb-4">Student Enrollment Form</h2>
        <form className="border p-4 rounded bg-warning" onSubmit={(e)=>{saveform(e)}}>
          
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="full_name" className="form-label">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                className="form-control"
                onChange={(e)=>{datahandler(e)}}
                value={data.full_name}
                placeholder="Enter your full name"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={(e)=>{datahandler(e)}}
                value={data.email}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label  className="form-label">Contact Number</label>
              <input
                type='tel'
                id="contact_number"
                name="contact_number"
                className="form-control"
                onChange={(e)=>{datahandler(e)}}
                value={data.contact_number}
                placeholder="Enter your contact number"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="course" className="form-label">Course</label>
              <select
                id="course"
                name="course"
                className="form-select"
                value={data.course}
                onChange={(e)=>{datahandler(e)}}
                required
              >
                <option value="" disabled>Select Course</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>JavaScript</option>
                <option>React</option>
                <option>Node</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="batch_code" className="form-label">Batch Code</label>
               <label htmlFor="course" className="form-label">Course</label>
              <select
                id="batch_code"
                name="batch_code"
                className="form-select"
                value={data.batch_code}
                onChange={(e)=>{datahandler(e)}}
                required
              >
                <option value="" disabled>Select Batch</option>
                <option>01A</option>
                <option>01B</option>
                <option>02A</option>
                <option>02B</option>
                <option>03</option>
              </select>
            </div>

            <div className="col-md-6">
              <label htmlFor="joining_date" className="form-label">Joining Date</label>
              <input
                type="date"
                id="joining_date"
                name="joining_date"
                className="form-control"
                onChange={(e)=>{datahandler(e)}}
                value={data.joining_date}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="remarks" className="form-label">Remarks</label>
            <textarea
              id="remarks"
              name="remarks"
              className="form-control"
              onChange={(e)=>{datahandler(e)}}
              value={data.remarks}
              rows="4"
              placeholder="Enter remarks..."
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
