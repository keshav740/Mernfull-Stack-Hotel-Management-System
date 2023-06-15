import React from 'react'
import './Billing.css'
import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Billing = () => {
  return (
  <>
    <HotelSidebar>
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Billing Details</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="#">Go Back</Link>
                                            </Button>

                                            <Button className='table-btn' variant="light" >
                                                <AiFillEdit />&nbsp;Bulk Edit
                                            </Button>

                                            <Button className='table-btn' variant="light" >
                                                <AiFillDelete />&nbsp;Bulk Delete
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
                                <label className="label">Name</label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Class</label>
                                <input type="text" class="form-control"

                                />

                            </div>


                            <div class="col-md-4 position-relative">
                                <label className="label">Father name</label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Date </label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="col-md-4 position-relative">
                                <label className="label">Check by</label>
                                <input type="text" class="form-control"

                                />

                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Check by</label>
                                <input type="text" class="form-control"

                                />

                            </div>

                            <div class="mb-4 ">
                                <label for="exampleFormControlTextarea1" >Reason for leave</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"

                                ></textarea>
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

export default Billing