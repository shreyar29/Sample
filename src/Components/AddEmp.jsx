import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import "./AddEmp.css";

function AddEmp() {
  const [slno, setSlno] = useState("");
  const [name, setName] = useState("");
  const [deptname, setDeptname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const handleSlnoChange = (e) => {
    setSlno(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDeptnameChange = (e) => {
    setDeptname(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage("Employee added successfully!");
    console.log("Employee added");
  };

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="slno">SL NO</label>
          <input
            type="number"
            id="slno"
            value={slno}
            onChange={handleSlnoChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="deptname">Department Name</label>
          <input
            type="text"
            id="deptname"
            value={deptname}
            onChange={handleDeptnameChange}
            required
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>

        <div className="form-group">
          <br />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>

        <div className="form-group">
          <Button type="submit" className="submit-button">
            Submit
          </Button>
        </div>
        {submitted && (
          <div className="form-details">
            <p className="success-message">{message}</p>
            <h3>Details of the Employee</h3>

            <p>SL NO:{slno}</p>
            <p>Name:{name}</p>
            <p>Department Name:{deptname}</p>
            <p>Age:{age}</p>
            <p>Phone:{phone}</p>
          </div>
        )}
      </Form>
    </div>
  );
}

export default AddEmp;
