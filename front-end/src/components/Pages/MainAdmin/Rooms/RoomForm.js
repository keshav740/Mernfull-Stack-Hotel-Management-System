import React,{useState} from 'react'
import { Button, Container, Row, Table ,Form} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
import { addRoom } from '../../../../Redux/action/RoomAction';
import { useDispatch } from 'react-redux';
const RoomForm = () => {

    //  const initialState = {
    //     Room_Number: '',
    //     Price: '',
    //     Room_Type: '',
    //     Available_Not: '',
    // };

    // const [state, setState] = useState(initialState);
    // const [success, setSuccess] = useState(false);
    // const { Room_Number, Price,Room_Type, Available_Not } = state;

    //   const navigate = useNavigate();

    // const addRoom = async (data) => {
    //     try {
    //         const response = await axios.post('http://localhost:4000/api/v1/room/new', data);
    //         if (response.status === 200) {
    //             setSuccess(true);
    //             setError('');
    //         }
    //     } catch (error) {
    //         setError('Failed to add room. Please try again.');
    //     }
    // };

    const dispatch = useDispatch();
    const [roomNumber, setRoomNumber]=useState("")
    const [price, setPrice]=useState("")
    const [roomType, setRoomType]=useState("")
    const [availableNot, setAvailableNot]=useState("")

    const handalSubmit = (event) =>{
        event.preventDefalut();
        if( roomNumber && price && roomType && availableNot ) {
            dispatch (addRoom ({
                roomNumber, price, roomType, availableNot
            }
            ))
            setRoomNumber("");
            setPrice("");
            setRoomType("");
            setAvailableNot("");
        }
    }
    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setState((prevState) => ({ ...prevState, [name]: value }));
    // };
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
                         onSubmit={handalSubmit}
                         >
                          
                            <div className="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Room_Number"
                                    value={roomNumber} onChange={(event) => setRoomNumber(event.target.value)}
                                    // value={Room_Number}
                                    // onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-4 position-relative">
                                <label className="label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Price"
                                    value={price} onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <div className="col-md-4 position-relative" controlId="formGridState" >
                                <label className="form-label">Room Type</label>
                                <Form.Select name="Room_Type" 
                               value={roomType} onChange={(event) => setRoomType(event.target.value)}
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
                              value={availableNot} onChange={(event) => setAvailableNot(event.target.value)}
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

export default RoomForm