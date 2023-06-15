import React from 'react'
// import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import './RoomBooking.css'
const Room = () => {
    return (
        <>


            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Room</h5></th>
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
                                            <IoIosCreate />&nbsp;<Link to="/room-list">Go Back</Link>
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
                                <label className="label">Room No.</label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"

                                />

                            </div>


                            <div class="col-md-4 position-relative"
                            // controlId="formGridState" className='input2'
                            >
                                <label class="form-label">Room Type</label>
                                <Form.Select>
                                    <option>Choose</option>
                                    <option value="1">Luxury</option>
                                    <option value="2">Delux</option>
                                    <option value="3">Normal</option>
                                    <option value="4">Super Delux</option>
                                </Form.Select>
                            </div>


                            <div class="col-md-4 position-relative"
                            // controlId="formGridState" className='input2'
                            >
                                <label class="form-label">Available/Not-Available</label>
                                <Form.Select>
                                    <option>Choose</option>
                                    <option value="1">yes</option>
                                    <option value="2">No</option>
                                
                                </Form.Select>
                            </div>



                            <div class="col-md-4 position-relative">
                                <label className="label">Image</label>
                                <input type="file" class="form-control" />
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

export default Room