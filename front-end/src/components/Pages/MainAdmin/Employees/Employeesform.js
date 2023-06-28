import React, { useState } from 'react'
import { Container, Col, Row, Table, Button, Toast, ToastContainer } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate, navigate } from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addemployees } from '../../../../Redux/action/EmployeeAction';
// import {toast} from 'react-toastify'


const EmployeesForm = () => {

    const Initialstate = {
        Employee_Name: "",
        Phone_Number: "",
        Address: "",
        Email: "",
        Dob: "",
        Role: "",
        Salary: "",

    }

    const dispatch = useDispatch();
    const [state, setState] = useState(Initialstate);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { Employee_Name, Phone_Number, Address, Email, Dob, Role, Salary } = state;

    const navigate = useNavigate()

    const addemployees = async (data) => {
        const response = await axios.post("http://localhost:4000/api/v1/employee/new", data);
        if (response.status === 200) {
            // toast.success("Employee Added Successfully");
            setFormSubmitted(true);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Employee_Name || !Phone_Number || !Address || !Email ||
            !Dob || !Role || !Salary) {
            // toast.error("Please provide value into each input field")
        } else {
            addemployees(state);
            if (formSubmitted) {
                setState(Initialstate)
                setFormSubmitted(false);
            }
            navigate("/employees-list")
        }

    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    };





    return (
        <>
            <ToastContainer position="top-center" />

            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Employee</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/employees-list">Go Back</Link>
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>
            {/* form section start */}

            <div className='form-div' >
                <Container>
                    <Row>
                        <form className="row g-4 p-3 registration-form" onSubmit={handleSubmit} >
                            <div class="col-md-4 position-relative">
                                <label className="label">Employee Name</label>
                                <input type="text" className="form-control"
                                    name='Employee_Name'
                                    onChange={handleInputChange} value={Employee_Name}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Phone Number</label>
                                <input type="text" className="form-control" name='Phone_Number'
                                    onChange={handleInputChange} value={Phone_Number}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Address</label>
                                <input type="text" className="form-control" name='Address'
                                    onChange={handleInputChange} value={Address}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Email</label>
                                <input type="text" className="form-control" name='Email'
                                    onChange={handleInputChange} value={Email}
                                />
                            </div>

                            {/* <div class="col-md-4 position-relative">
                                <label class="form-label">Gender</label>
                                <select class="form-select" value={Gender} onChange={handleInputChange}>
                                    <option >choose</option>
                                    <option >Male </option>
                                    <option >Female</option>
                                    <option >Other</option>

                                </select>
                            </div> */}
                            <div class="col-md-4 position-relative">
                                <label className="label">DOB</label>
                                <input type="text" class="form-control" name='Dob'
                                    onChange={handleInputChange} value={Dob}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Role</label>
                                <input type="text" class="form-control" name='Role'
                                    onChange={handleInputChange} value={Role}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Salary</label>
                                <input type="text" class="form-control" name='Salary'
                                    onChange={handleInputChange} value={Salary}
                                />
                            </div>
                            <center>
                                <Button className="stu_btn"
                                    variant="success"
                                    type="submit"
                                    value="Add"
                                >
                                    Submit
                                </Button>
                            </center>
                        </form>
                    </Row>
                </Container>
            </div>




        </>
    )
}

export default EmployeesForm