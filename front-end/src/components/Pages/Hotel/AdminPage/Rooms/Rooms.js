import React,{useState} from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap';
import { AiFillDashboard, AiFillEdit, } from "react-icons/ai";
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ModalCamp from './ModalCamp';
const Rooms = ({post}) => {

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({});
    const handleModel = () => {
      setOpen(true);
      setUser(post);
  
    }
    return (
        <>
            <Container style={{ width: "90%", marginTop: "30px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp; Dashboard / Rooms</h5></th>
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
                                            <IoIosCreate />
                                        </Button>
                                        <Button className='table-btn' variant="light" >
                                            <AiFillEdit />
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>


            <div className="post-table">

                {/* <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Item-Details</h5> */}
                <Container>
                    <Row>


                        <Table responsive>
                            <table class="table table-bordered border-secondary">
                                <thead>
                                    <tr>

                                        <th>Item Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Item Type</th>
                                        <th>Available/NotAvailable</th>
                                        <th>Action Edit</th>
                                        <th>Action View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>keshav</td>
                                        <td>keshav</td>
                                        <td>keshav</td>
                                        <td>keshav</td>
                                        <td>Yes</td>
                                        <td>

                                            <Link to="/items">
                                                <Button className='table-btn' variant="light" >
                                                    &#9998;Edit
                                                </Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button className='table-btn' variant="light"
                                            onClick={() => handleModel()} 
                                            >
                                                &#128065;View
                                            </Button>
                                            {open && (
                                                <ModalCamp

                                                    open={open}
                                                    setOpen={setOpen}
                                                    {...user}
                                                />
                                            )}

                                        </td>

                                        {/* <button className="view-btn">View </button> */}
                                    </tr>
                                </tbody>
                            </table>
                        </Table>
                    </Row>
                </Container>

            </div>





        </>
    )
}

export default Rooms