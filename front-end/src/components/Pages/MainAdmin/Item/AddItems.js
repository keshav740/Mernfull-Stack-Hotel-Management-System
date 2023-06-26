import React, { useState } from 'react'
// import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { addItems } from '../../../../Redux/action/AddItemAction';

const AddItem = () => {
  
    const Initialstate = {
        Item_Name: "",
        price: "",
        Category_Name: "",
    }


    const dispatch = useDispatch();

    const [state, setState] = useState(Initialstate);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { Item_Name, price, Category_Name, } = state;

    const navigate = useNavigate()
    
    const addItems = async (data) => {
        const response = await axios.post("http://localhost:4000/api/v1/item/new", data);
        if (response.status === 200) {
            // toast.success("Employee Added Successfully");
            setFormSubmitted(true);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Item_Name || !price || !Category_Name) {
            // toast.error("Please provide value into each input field")
        } else {
            addItems(state);
            if (formSubmitted) {
                setState(Initialstate)
                setFormSubmitted(false);
            }
            navigate("/item-list")
        }

    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
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
                                    name='Item_Name'
                                    onChange={handleInputChange} value={Item_Name}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"
                                    name='price'
                                    onChange={handleInputChange} value={price}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Categories</label>
                                <input type="text" class="form-control"
                                    name='Category_Name'
                                    onChange={handleInputChange} value={Category_Name}
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