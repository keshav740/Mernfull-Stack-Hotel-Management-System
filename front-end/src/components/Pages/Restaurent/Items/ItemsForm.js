import React from 'react'
import './Items.css'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
const ItemsForm = () => {
    return (
        <>
            <Container >
                <Table striped bordered hover className='main-table' style={{ marginTop: "40px" }} >
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard / Items </h5></th>
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
                                <label className="label">Item Name</label>
                                <input type="text" className="form-control"
                               
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Phone Number</label>
                                <input type="text" className="form-control" name='Phone_Number'
                              
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Address</label>
                                <input type="text" className="form-control" name='Address'
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Email</label>
                                <input type="text" className="form-control" name='Email'
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
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Role</label>
                                <input type="text" class="form-control" name='Role'
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Salary</label>
                                <input type="text" class="form-control" name='Salary'
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



            {/* Table section start */}
            {/* <Container className='item-table'>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Item Name</th>
                                <th>Item Image</th>
                                <th>Item Price</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pizza</td>
                                <td>
                                    <div className='item-img'>
                                        <img className='item-img-fill' src='/img/item-pizza.jpg' />
                                    </div>
                                </td>
                                <td>500/</td>
                                <td><Button variant='light' className='plus-btn'>+</Button></td>
                            </tr>
                            <tr>
                                <td>Dosa</td>
                                <td>
                                    <div className='item-img'>
                                        <img className='item-img-fill' src='/img/item-dosa.jpg' />
                                    </div>
                                </td>
                                <td>200/</td>
                                  <td><Button variant='light' className='plus-btn'>+</Button></td>
                            </tr>
                            <tr>
                                <td>Burgur</td>
                                <td>
                                    <div className='item-img'>
                                        <img className='item-img-fill' src='/img/item-burgur.jpg' />
                                    </div>
                                </td>
                                <td>150</td>
                                  <td><Button variant='light' className='plus-btn'>+</Button></td>
                            </tr>
                            <tr>
                                <td>chawmein</td>
                                <td>
                                    <div className='item-img'>
                                        <img className='item-img-fill' src='/img/item-chawmein.jpg' />
                                    </div>
                                </td>
                                <td>250/</td>
                                <td><Button variant='light' className='plus-btn'>+</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Container> */}

        </>
    )
}

export default ItemsForm