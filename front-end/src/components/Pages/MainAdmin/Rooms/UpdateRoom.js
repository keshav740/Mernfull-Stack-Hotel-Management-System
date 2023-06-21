import React, { useState,useEffect } from 'react'
import { Button, Container, Row, Table, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate,navigate,useParams } from 'react-router-dom';
import { updatroom } from '../../../../Redux/action/RoomAction';

const UpdateRoom = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  const [updateData, setUpdateData] = useState();

  const { rooms, loading } = useSelector((state) => state.app);
  
    useEffect(() => {
    if (id) {
      const singleUser = rooms.filter((room) => room.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  console.log("updated data", updateData);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updatroom(updateData));
    navigate("/add-room");
  };
  
  return (
  <>
  
  <Container style={{ width: '90%', marginTop: '20px' }}>
                <Table striped bordered hover className="main-table">
                    <thead>
                        <tr>
                            <th>
                                <h5>
                                    <AiFillDashboard /> &nbsp;Dashboard / Add New Room
                                </h5>
                            </th>
                        </tr>
                    </thead>
                </Table>
                <Table>
                    <thead>
                        <tr>
                            <th>
                                <div className="table-div">
                                    <Button className="table-btn" variant="light">
                                        <AiOutlineDashboard />&nbsp;<Link to="/room-list">Go Back</Link>
                                    </Button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                </Table>
            </Container>

            <div className="form-div">
                <Container>
                    <Row>
                        <form className="row g-4 p-3 registration-form"
                            onSubmit={handleUpdate}
                        >

                            <div className="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Room_Number"
                                value={updateData && updateData.Room_Number}
                                onChange={newData}
                                />
                            </div>
                            <div className="col-md-4 position-relative">
                                <label className="label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Price"
                                    value={updateData && updateData.Price}
                                    onChange={newData}
                                />
                            </div>
                            <div className="col-md-4 position-relative" controlId="formGridState" >
                                <label className="form-label">Room Type</label>
                                <Form.Select name="Room_Type"
                                      
                                       
                                    value={updateData && updateData.Room_Type}
                                    onChange={newData}
                                >
                                    <option>Choose</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Delux">Delux</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Super Delux">Super Delux</option>
                                </Form.Select>
                            </div>
                            <div className="col-md-4 position-relative" controlId="formGridState">
                                <label className="form-label">Available/Not-Available</label>
                                <Form.Select name="Available_Not"
                                  
                                    value={updateData && updateData.Available_Not}
                                    onChange={newData}
                                >
                                    <option>Choose</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                            </div>
                            <center>
                                <Button className="stu_btn" variant="success" type="submit">
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

export default UpdateRoom