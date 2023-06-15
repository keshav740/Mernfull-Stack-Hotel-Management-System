import React from 'react'
import './Items.css'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
const Items = () => {
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


            {/* Table section start */}
            <Container className='item-table'>
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
            </Container>

        </>
    )
}

export default Items