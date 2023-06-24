
import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from '../../../../ReduxCopy/Action';
// import { FunctionAddUser } from "../Redux/Action";



const AddService = () => {
    const [sname, snamechange] = useState('');
    const [service, servicechange] = useState('');
    // const [phone, phonechange] = useState('');
    // const [role, rolechange] = useState('staff');
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { sname, service };
        dispatch(FunctionAddUser(userobj));
        navigate('/service-list');
    }



  return (
  <>
<div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={sname} onChange={e => snamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={service} onChange={e => servicechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div> */}
                            {/* <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role} onChange={e => rolechange(e.target.value)} className="form-control">
                                        <option value="admin">Admin</option>
                                        <option value="staff">Staff</option>
                                    </select>
                                </div>
                            </div> */}

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'left' }}>
                        <button className="btn btn-primary" type="submit">Submit</button> |
                        <Link className="btn btn-danger" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>



  </>
  )
}

export default AddService




































































// import React, { useState } from 'react'
// import { Container, Col, Row, Table, Button } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
// import { RiArrowGoBackLine } from 'react-icons/ri';
// import { IoIosCreate } from 'react-icons/io';
// import Form from 'react-bootstrap/Form';
// import { Link, useNavigate } from 'react-router-dom';
// import './RoomService.css'
// import axios from 'axios';
// import {useDispatch} from "react-redux"
// import { addservice } from '../../../../Redux/action/ServiceAction';




// const AddService = () => {

//     // const dispatch = useDispatch();

//     // const [servicename, setServicename] = useState("");
//     // const [servicecharge, setServicecharge] = useState("");


//     // const handleSubmit = (event) => {
//     //     event.preventDefault();
//     //     if (
//     //         servicename && servicecharge
//     //           ) {
//     //       dispatch(addservice({ 
//     //         servicename, servicecharge
    
//     //       }));
         
//     //       setServicename("");
//     //       setServicecharge("");
//     //     }
//     // };
  
      


//     const Initialstate = {
//         Service_Name: "",
//         Servive_Charge: "",
    
//     }

//     const dispatch = useDispatch();
//     const [state, setState] = useState(Initialstate);
//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const { Service_Name, Servive_Charge,} = state;

//      const navigate = useNavigate()

//   const addservice = async (data) => {
//         const response = await axios.post("http://localhost:4000/api/v1/room-service/new", data);
//         if (response.status === 200) {
//             // toast.success("Services Added Successfully");
//             setFormSubmitted(true);
//         }
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if ( !Service_Name || !Servive_Charge ) {
//             // toast.error("Please provide value into each input field");
//             // console.log("kuchbhi")
//         } else {
//             addservice(state);
//             if (formSubmitted) {
//                 setState(Initialstate);
//                 // toast.info('Form submitted successfully!');
//                 setFormSubmitted(false);
//             }
//             navigate("/service-list")

//         }

//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setState({ ...state, [name]: value });
//     };





//   return (
//    <>
   
   
//   {/* <div> */}
//                 <Container style={{ width: "90%", marginTop: "20px" }} >
//                     <Table striped bordered hover className='main-table'>
//                         <thead>
//                             <tr>
//                                 <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add Service</h5></th>
//                             </tr>
//                         </thead>
//                     </Table>
//                     <Row>
//                         <Table striped bordered hover>
//                             <thead>
//                                 <tr>
//                                     <th>
//                                         <div className='table-div'>

//                                             <Button className='table-btn' variant="light" >
//                                                 <IoIosCreate />&nbsp;<Link to="/service-list">Go Back</Link>
//                                             </Button>

//                                         </div>
//                                     </th>
//                                 </tr>
//                             </thead>
//                         </Table>
//                         <hr />
//                     </Row>
//                 </Container>
//                 {/* form section start */}
//                 <div className='form-div' >
//                 <Container>
//                     <Row>


//                         <form className="row g-4 p-3 registration-form" onSubmit={handleSubmit} >

//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Service Name</label>
//                                 <input type="text" class="form-control"
//                                  name='Service_Name'
//                             onChange={handleInputChange} value={Service_Name}
//                                 //  value={servicename} onChange={(event) => setServicename(event.target.value)}

//                                 />
                          

//                             </div>

                           


//                         <div class="col-md-4 position-relative">
//                                 <label className="label">Service Charges</label>
//                                 <input type="text" class="form-control"
//                                  name='Servive_Charge'
//                                  onChange={handleInputChange} value={Servive_Charge}
//                                 //  value={servicecharge} onChange={(event) => setServicecharge(event.target.value)}


//                                 />

//                             </div>

//                             <center>

//                                 <Button className="stu_btn"
//                                     variant="success"
//                                     type="submit"
//                                     value="Add"
//                                 >
//                                     Submit
//                                 </Button>

//                             </center>

//                         </form>
//                     </Row>
//                 </Container>
//                 </div>
            


   
   
//    </>
//   )
// }

// export default AddService