import React, { useState } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './RoomService.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateservice } from '../../../../Redux/action/ServiceAction';






const UpdateService = () => {

    const {id} = useParams();
    const services = useSelector(state => state.services.item.ser)
    const existingUser = services.filter(f => f.id == id);
    const {Service_Name,Servive_Charge } = existingUser[0]; 
    const [uservice_Name, setUservice_Name] = useState(Service_Name) 
    const [uservive_Charge, setUservive_Charge] = useState(Servive_Charge)


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateservice({
            id:id,
            Service_Name:uservice_Name,
            Servive_Charge: uservive_Charge,
        }))
        navigate("/service-list")
    }
    


  return (
   <>
<Container style={{ width: "90%", marginTop: "20px" }} >
                    <Table striped bordered hover className='main-table'>
                        <thead>
                            <tr>
                                <th><h5><AiFillDashboard /> &nbsp;Dasboard / Update Service</h5></th>
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


                <div className='form-div' >
                <Container>
                    <Row>


                        <form className="row g-4 p-3 registration-form" 
                        onSubmit={handleUpdate} 
                         >

                            <div class="col-md-4 position-relative">
                                <label className="label">Service Name</label>
                                <input type="text" class="form-control"
                                 name='Service_Name'
                                 value={uservice_Name} onChange={e => setUservice_Name(e.target.value)} 
                               
                                />
                          

                            </div>

                           


                        <div class="col-md-4 position-relative">
                                <label className="label">Service Charges</label>
                                <input type="text" class="form-control"
                                 name='Servive_Charge'
                                 value={uservive_Charge} onChange={e => setUservive_Charge(e.target.value)} 
                               

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

export default UpdateService
