import React from 'react'
import { Container, Col, Row, Table, Button, } from 'react-bootstrap'
// import { ToastContainer, toast } from 'react-toastify';
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { addguest } from '../../../../Redux/action/GuestAction';
// import 'react-toastify/dist/ReactToastify.css';

const Guest = () => {



    const initialState = {
        Guest_Name: '',
        Guest_Number: '',
        Address: '',
        Email: '',
        Room_Number: '',
        Room_Quantity: '',
        Booking_Date_Time: '',
        Checkin_Date_Time: '',
        Checkout_Date_Time: '',
        Number_Of_Children: '',
        Number_Of_Adults: '',
    };

    const [state, setState] = useState(initialState);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate()

    // const initialState = {
    //     Guest_Name: '',
    //     Guest_Number: '',
    //     Address: '',
    //     Email: '',
    //     Room_Number: '',
    //     Room_Quantity: '',
    //     Booking_Date_Time: '',
    //     Checkin_Date_Time: '',
    //     Checkout_Date_Time: '',
    //     Number_Of_Children: '',
    //     Number_Of_Adults: '',
    // };

    const addguest = async (data) => {
        const response = await axios.post('http://localhost:4000/api/v1/guest/new', data);
        if (response.status === 200) {
            // toast.success('Guest Added Successfully');
            setFormSubmitted(true);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            if (!Guest_Name || !Guest_Number || !Address || !Email || !Room_Number || !Room_Quantity
                || !Booking_Date_Time || !Checkin_Date_Time || !Checkout_Date_Time || !Number_Of_Children 
                || !Number_Of_Adults
                ) {
                // toast.error('Please Provide required value');
            } else {
                addguest(state);
                if (formSubmitted) {
                    setState(initialState);
                    // toast.info('Form submitted successfully!');
                    setFormSubmitted(false);
                }
                navigate("/guest-details")
            }
        };

        // const addGuest = async (data) => {
        //     const response = await axios.post('http://localhost:4000/api/v1/guest/new', data);
        //     if (response.status === 200) {
        //         // toast.success('Guest Added Successfully');
        //         setFormSubmitted(true);

        //     }
        // };

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     if (!Guest_Name || !Email) {
        //         // toast.error('Please Provide required value');
        //     } else {
        //         addGuest(state);
        //         if (formSubmitted) {
        //             setState(initialState);
        //             // toast.info('Form submitted successfully!');
        //             setFormSubmitted(false);
        //         }
        //     }
        // };

        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setState({ ...state, [name]: value });
        };

        return (
            <>
                {/* <ToastContainer position='top-center' /> */}

                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Guest</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="/guest-details">Go Back</Link>
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


                <div className='form-div'>
                    <Container>
                        <Row>
                            <form className="row g-4 p-3 registration-form"
                            onSubmit={handleSubmit}
                            >
                                <div className="col-md-4 position-relative">
                                    <label htmlFor='Guest_Name' className="label">Guest Name</label>
                                    <input type="text" name="Guest_Name" id="Guest_Name" className="form-control"
                                     onChange={handleInputChange} value={Guest_Name}
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Guest Number</label>
                                    <input type="text" name="Guest_Number" className="form-control"
                                     onChange={handleInputChange} value={Guest_Number} 
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Address</label>
                                    <input type="text" name="Address" className="form-control"
                                     onChange={handleInputChange} value={Address}
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Email</label>
                                    <input type="text" name="Email" className="form-control"
                                    onChange={handleInputChange} value={Email}
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Room No.</label>
                                    <input type="text" name="Room_Number" className="form-control"
                                    onChange={handleInputChange} value={Room_Number} 
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Room Quantity</label>
                                    <input type="text" name="Room_Quantity" className="form-control"
                                    onChange={handleInputChange} value={Room_Quantity} 
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Booking Date & Time</label>
                                    <input type="datetime-local" name="Booking_Date_Time" className="form-control"
                                    onChange={handleInputChange} value={Booking_Date_Time}
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Check-in Date & Time</label>
                                    <input type="datetime-local" name="Checkin_Date_Time" className="form-control"
                                     onChange={handleInputChange} value={Checkin_Date_Time}
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Check-Out Date & Time</label>
                                    <input type="datetime-local" name="Checkout_Date_Time" className="form-control"
                                     onChange={handleInputChange} value={Checkout_Date_Time} 
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Number Of Childrens</label>
                                    <input type="text" name="Number_Of_Children" className="form-control"
                                     onChange={handleInputChange} value={Number_Of_Children} 
                                    />
                                </div>
                                <div className="col-md-4 position-relative">
                                    <label className="label">Number Of Adults</label>
                                    <input type="text" name="Number_Of_Adults" className="form-control"
                                     onChange={handleInputChange} value={Number_Of_Adults} 
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
}

export default Guest