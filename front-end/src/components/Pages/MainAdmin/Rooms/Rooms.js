
// import React, { useState } from 'react';
// import { Container, Col, Row, Table, Button, Alert } from 'react-bootstrap';
// import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';

// const Room = () => {
//     const initialState = {
//         Room_Number: '',
//         Price: '',
//         Room_Type: '',
//         Available_Not: '',
//     };

//     const [state, setState] = useState(initialState);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState('');

//     const { Room_Number, Price, Room_Type, Available_Not } = state;

//     const navigate = useNavigate();

//     const addRoom = async (data) => {
//         try {
//             const response = await axios.post('http://localhost:4000/api/v1/room/new', data);
//             if (response.status === 200) {
//                 setSuccess(true);
//                 setError('');
//             }
//         } catch (error) {
//             setError('Failed to add room. Please try again.');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!Room_Number || !Price || !Room_Type || !Available_Not) {
//             setError('Please provide a value for each input field.');
//             setSuccess(false);
//         } else {
//             addRoom(state);
//             setTimeout(() => navigate.push('/room-list'), 500);
//         }
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setState((prevState) => ({ ...prevState, [name]: value }));
//     };

//     return (
//         <>
//             <Container style={{ width: '90%', marginTop: '20px' }}>
//                 <Table striped bordered hover className="main-table">
//                     <thead>
//                         <tr>
//                             <th>
//                                 <h5>
//                                     <AiFillDashboard /> &nbsp;Dashboard / Add New Room
//                                 </h5>
//                             </th>
//                         </tr>
//                     </thead>
//                 </Table>
//                 <Row>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>
//                                     <div className="table-div">
//                                         <Button className="table-btn" variant="light">
//                                             <AiOutlineDashboard />&nbsp;<Link to="/room-list">Go Back</Link>
//                                         </Button>
//                                     </div>
//                                 </th>
//                             </tr>
//                         </thead>
//                     </Table>
//                     <hr />
//                 </Row>
//             </Container>

//             <div className="form-div">
//                 <Container>
//                     <Row>
//                         <form className="row g-4 p-3 registration-form" onSubmit={handleSubmit}>
//                             {success && (
//                                 <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
//                                     Room added successfully.
//                                 </Alert>
//                             )}
//                             {error && <Alert variant="danger">{error}</Alert>}
//                             <div className="col-md-4 position-relative">
//                                 <label className="label">Room No.</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="Room_Number"
//                                     value={Room_Number}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div className="col-md-4 position-relative">
//                                 <label className="label">Price</label>
//                                 <input
//                                     type="text"
//                                     className="form-control"
//                                     name="Price"
//                                     value={Price}
//                                     onChange={handleInputChange}
//                                 />
//                             </div>
//                             <div class="col-md-4 position-relative"
//                                 controlId="formGridState" className='input2'
//                             >
//                                 <label class="form-label">Room Type</label>
//                                 <Form.Select
//                                     value={Room_Type}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option>Choose</option>
//                                     <option value="1">Luxury</option>
//                                     <option value="2">Delux</option>
//                                     <option value="3">Normal</option>
//                                     <option value="4">Super Delux</option>
//                                 </Form.Select>
//                             </div>
//                             <div class="col-md-4 position-relative"
//                                 controlId="formGridState" className='input2'
//                             >
//                                 <label class="form-label">Available/Not-Available</label>
//                                 <Form.Select
//                                     value={Available_Not}
//                                     onChange={handleInputChange}
//                                 >
//                                     <option>Choose</option>
//                                     <option value="1">yes</option>
//                                     <option value="2">No</option>

//                                 </Form.Select>
//                             </div>
//                             <center>
//                                 <Button className="stu_btn" variant="success" type="submit">
//                                     Submit
//                                 </Button>
//                             </center>
//                         </form>
//                     </Row>
//                 </Container>
//             </div>
//         </>
//     );
// };

// export default Room;



import React, { useState } from 'react';
import { Container, Col, Row, Table, Button, Alert } from 'react-bootstrap';
import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const Room = () => {
    const initialState = {
        Room_Number: '',
        Price: '',
        // Room_Type: '',
        // Available_Not: '',
    };

    const [state, setState] = useState(initialState);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const { Room_Number, Price,  } = state;

    //   const navigate = useNavigate();

    const addRoom = async (data) => {
        try {
            const response = await axios.post('http://localhost:4000/api/v1/room/new', data);
            if (response.status === 200) {
                setSuccess(true);
                setError('');
            }
        } catch (error) {
            setError('Failed to add room. Please try again.');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Room_Number || !Price ) {
            setError('Please provide a value for each input field.');
            setSuccess(false);
        } else {
            addRoom(state);
            // setTimeout(() => navigate.push('/room-list'), 500);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
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
                        <form className="row g-4 p-3 registration-form" onSubmit={handleSubmit}>
                            {/* Success and error alerts */}
                            <div className="col-md-4 position-relative">
                                <label className="label">Room No.</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Room_Number"
                                    value={Room_Number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="col-md-4 position-relative">
                                <label className="label">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Price"
                                    value={Price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* <div className="col-md-4 position-relative" controlId="formGridState" >
                                <label className="form-label">Room Type</label>
                                <Form.Select name="Room_Type" value={Room_Type} onChange={handleInputChange}>
                                    <option>Choose</option>
                                    <option value="Luxury">Luxury</option>
                                    <option value="Delux">Delux</option>
                                    <option value="Normal">Normal</option>
                                    <option value="Super Delux">Super Delux</option>
                                </Form.Select>
                            </div> */}
                            {/* <div className="col-md-4 position-relative" controlId="formGridState">
                                <label className="form-label">Available/Not-Available</label>
                                <Form.Select name="Available_Not" value={Available_Not} onChange={handleInputChange}>
                                    <option>Choose</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </Form.Select>
                            </div> */}
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
    );
};

export default Room;