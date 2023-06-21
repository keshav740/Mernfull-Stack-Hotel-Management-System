import React, { useState } from 'react'
// import HotelSidebar from '../../HotelSidebar'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { IoIosCreate } from 'react-icons/io';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './RoomService.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import {useDispatch} from "react-redux"
import { addservice } from '../../../../Redux/action/ServiceAction';




const AddService = () => {

    // const dispatch = useDispatch();

    // const [servicename, setServicename] = useState("");
    // const [servicecharge, setServicecharge] = useState("");


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (
    //         servicename && servicecharge
    //           ) {
    //       dispatch(addservice({ 
    //         servicename, servicecharge
    
    //       }));
         
    //       setServicename("");
    //       setServicecharge("");
    //     }
    // };
  
      


    const Initialstate = {
        Service_Name: "",
        Servive_Charge: "",
    
    }

    const dispatch = useDispatch();
    const [state, setState] = useState(Initialstate);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const { Service_Name, Servive_Charge,} = state;

     const navigate = useNavigate()

    const addservice = async (data) => {
        const response = await axios.post("http://localhost:4000/api/v1/room-service/new", data);
        if (response.status === 200) {
            toast.success("Services Added Successfully");
            setFormSubmitted(true);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if ( !Service_Name || !Servive_Charge ) {
            toast.error("Please provide value into each input field");
            // console.log("kuchbhi")
        } else {
            addservice(state);
            if (formSubmitted) {
                setState(Initialstate);
                toast.info('Form submitted successfully!');
                setFormSubmitted(false);
            }
            navigate("/service-list")

        }

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };





  return (
   <>
   
   
  {/* <div> */}
                <Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Service</h5></th>
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
                                                <IoIosCreate />&nbsp;<Link to="/service-list">Go Back</Link>
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
                                <label className="label">Service Name</label>
                                <input type="text" class="form-control"
                                 name='Service_Name'
                            onChange={handleInputChange} value={Service_Name}
                                //  value={servicename} onChange={(event) => setServicename(event.target.value)}

                                />
                          

                            </div>

                           


                        <div class="col-md-4 position-relative">
                                <label className="label">Service Charges</label>
                                <input type="text" class="form-control"
                                 name='Servive_Charge'
                                 onChange={handleInputChange} value={Servive_Charge}
                                //  value={servicecharge} onChange={(event) => setServicecharge(event.target.value)}


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
            


   
   
   </>
  )
}

export default AddService