import React,{useState} from 'react'
// import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { additems } from '../../../../Redux/action/AddItemAction';
// import './RoomBooking.css'
const AddItem = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate("")
    const [itemname, setItemname] = useState("");
    const [price, setPrice] = useState("");
    const [categories, setCategories] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if (itemname && price && categories ) {
          dispatch(additems({
            itemname, price, categories}));
        
            setItemname("");
            setPrice("");
            setCategories("");
           navigate="/item-list"
           
           }
      };
    
    return (
        <>

            
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
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


                        <form className="row g-4 p-3 registration-form" 
                        onSubmit={handleSubmit}
                        >

                            <div class="col-md-4 position-relative">
                                <label className="label">Item Name</label>
                                <input type="text" class="form-control"
                                 value={itemname} onChange={(event) => setItemname(event.target.value)}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"
                                 value={price} onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Categories</label>
                                <input type="text" class="form-control"
                                 value={categories} onChange={(event) => setCategories(event.target.value)}
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

export default AddItem