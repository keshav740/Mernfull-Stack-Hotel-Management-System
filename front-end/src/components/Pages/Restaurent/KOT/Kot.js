import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";

const Kot = () => {
    return (

        <>
            <Container className='main-col' >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard/ KOT</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                 
                    <hr />
                </Row>
            </Container>

            <div className='form-div'>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className='billing-card'>
                                <h3 className='res-name'> Samriddhi </h3>
                                <h5> Phone.no : <span>8796541234</span>  </h5>
                                <h5> Address : <span>mansrowar</span>  </h5>
                                <h5> Gst.no : <span>1</span>  </h5>
                                <h5>Booking Date&Time :<span>2/7/23/ 7:05</span>  </h5>
                                <h5>Table No. :<span>1</span>  </h5>
                                <Table responsive>
                                    <table class="table table-bordered border-secondary">
                                        <thead>
                                            <tr>
                                                <th>Item</th>
                                                <th>Price</th>
                                                {/* <th>Total</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Veg</td>
                                                <td>100</td>
                                                {/* <td>100</td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr></hr>



                                </Table>

                                <div className='d-flex text-center'>

                                    <Link to="/KOT">
                                        <Button className='table-btn d-flex' variant="light" >
                                            &#128065;KOT
                                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </Link>

                                </div>
                            </div>
                        </Col>
                        <Col sm={4}></Col>
                        <Col sm={4}></Col>
                    </Row>
                </Container>
            </div>
            <br />
        </>
    )
}

export default Kot