import React from 'react'
// import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import './RoomBooking.css'
const Guest = () => {
    return (
        <>

            
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
                <div className='form-div' >
                <Container>
                    <Row>


                        <form className="row g-4 p-3 registration-form" >

                            <div class="col-md-4 position-relative">
                                <label className="label">Guest Name</label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Guest Number</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            
                            <div class="col-md-4 position-relative">
                                <label className="label">Address</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Email</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Room Quantity</label>
                                <input type="text" class="form-control"

                                />

                            </div>



                            

                        <div class="col-md-4 position-relative">
                                <label className="label">Booking Date & Time</label>
                                <input type="datetime-local" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Chek-in-Date & Time</label>
                                <input type="datetime-local" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Chek-Out-Date & Time</label>
                                <input type="datetime-local" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Number Of Childrens</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Number Of Adults</label>
                                <input type="text" class="form-control"

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




        </>
    )
}

export default Guest