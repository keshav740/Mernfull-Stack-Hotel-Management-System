import React, { useState } from 'react'
import HotelSidebar from '../../HotelSidebar'
import { Container, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import './RoomBooking.css'
import { useDispatch } from 'react-redux';
import axios from 'axios';





const RoomBooking = () => {

    const Initialstate = {
        Guest_Name: "",
        Guest_Number: "",
        Address: "",
        Email: "",
        Room_Number: "",
        Booking_Date_Time: "",
        Checkout_Date_Time:"",
        Checkin_Date_Time: "",
        Number_Of_Children: "",
        Number_Of_Adults: "",
        Special_Request: "",
    }

    const dispatch = useDispatch();
    const [state, setState] = useState(Initialstate);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { Guest_Name, Guest_Number, Address, Email, Room_Number, Booking_Date_Time,
        Checkin_Date_Time,Checkout_Date_Time, Number_Of_Children, Number_Of_Adults, Special_Request
    } = state;

    const navigate = useNavigate()

    const addservice = async (data) => {
        const response = await axios.post("http://localhost:4000/api/v1/room-booking/new", data);
        if (response.status === 200) {
            // toast.success("Services Added Successfully");
            setFormSubmitted(true);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Guest_Name || !Guest_Number || !Address || !Email || !Room_Number || !Booking_Date_Time || !Checkout_Date_Time
            || !Checkin_Date_Time || !Number_Of_Children || !Number_Of_Adults || !Special_Request) {
            // toast.error("Please provide value into each input field");
            // console.log("kuchbhi")
        } else {
            addservice(state);
            if (formSubmitted) {
                setState(Initialstate);
                // toast.info('Form submitted successfully!');
                setFormSubmitted(false);
            }
            navigate("/roomlist")

        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };




    return (
        <>

            <HotelSidebar>
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Booking Room</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="/roomlist">Go Back</Link>
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
                                    <label className="label">Guest Name</label>
                                    <input type="text" class="form-control"
                                        name='Guest_Name' onChange={handleInputChange} value={Guest_Name}
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Phone No.</label>
                                    <input type="text" class="form-control"
                                        name='Guest_Number' onChange={handleInputChange} value={Guest_Number}
                                    />

                                </div>


                                <div class="col-md-4 position-relative">
                                    <label className="label">Address</label>
                                    <input type="text" class="form-control"
                                        name='Address' onChange={handleInputChange} value={Address}
                                    />

                                </div>


                                <div class="col-md-4 position-relative">
                                    <label className="label">Email</label>
                                    <input type="text" class="form-control"
                                        name='Email' onChange={handleInputChange} value={Email}
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Room No.</label>
                                    <input type="text" class="form-control"
                                        name='Room_Number' onChange={handleInputChange} value={Room_Number}
                                    />

                                </div>
                                {/* <div class="col-md-4 position-relative"
                                // controlId="formGridState" className='input2'
                                >
                                    <label class="form-label">Room Type</label>
                                    <Form.Select onChange={handleInputChange} value={Service_Name}>
                                        <option>Choose</option>
                                        <option value="1">Luxury</option>
                                        <option value="2">Delux</option>
                                        <option value="3">Normal</option>
                                        <option value="4">Super Delux</option>
                                    </Form.Select>
                                    <div className='show'>
                                        <div className='showtext'>anything else</div>
                                    </div>
                                </div> */}

                                <div class="col-md-4 position-relative">
                                    <label className="label">Booking Date</label>
                                    <input type="datetime-local" class="form-control"
                                        name='Booking_Date_Time' onChange={handleInputChange} value={Booking_Date_Time}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Arrival Date</label>
                                    <input type="datetime-local" class="form-control"
                                        name='Checkin_Date_Time' onChange={handleInputChange} value={Checkin_Date_Time}
                                    />

                                </div>

                                <div class="col-md-4 position-relative">
                                    <label className="label">Departure Date</label>
                                    <input type="datetime-local" class="form-control"
                                        name='Checkout_Date_Time' onChange={handleInputChange} value={Checkout_Date_Time}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Adults</label>
                                    <input type="text" class="form-control"
                                        name='Number_Of_Adults' onChange={handleInputChange} value={Number_Of_Adults}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Number Of Children</label>
                                    <input type="text" class="form-control"
                                        name='Number_Of_Children' onChange={handleInputChange} value={Number_Of_Children}
                                    />

                                </div>
                                <div class="col-md-4 position-relative">
                                    <label className="label">Special Request</label>
                                    <input type="text" class="form-control"
                                        name='Special_Request' onChange={handleInputChange} value={Special_Request}
                                    />

                                </div>



                                <center>

                                    <Button className="stu_btn"
                                        variant="success"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>

                                </center>

                            </form>
                        </Row>
                    </Container>
                </div>
            </HotelSidebar>




        </>
    )
}

export default RoomBooking