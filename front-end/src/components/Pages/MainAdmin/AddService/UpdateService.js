import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action";
import {FetchUserObj, FunctionUpdateUser } from "../../../../ReduxCopy/Action"

const UpdateService = () => {

    const [id, idchange] = useState(0);
    const [sname, snamechange] = useState('');
    const [service, servicechange] = useState('');
    // const [phone, phonechange] = useState('');
    // const [role, rolechange] = useState('staff');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { code } = useParams();

    const userobj=useSelector((state)=>state.user.userobj)


    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { id, sname, service };
        dispatch(FunctionUpdateUser(userobj,id));
        navigate('/service-list');
    }

    useEffect(() => {
        dispatch(FetchUserObj(code));
    }, [])

    useEffect(() => {
        if(userobj){
            idchange(userobj.id);
            snamechange(userobj.name);
            servicechange(userobj.email);
            // phonechange(userobj.phone);
            // rolechange(userobj.role);
        }
    }, [userobj])



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
                                    <label>Id</label>
                                    <input value={id || ''} disabled="disabled" className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Service-Name</label>
                                    <input value={sname || ''} onChange={e => snamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Service-charge</label>
                                    <input value={service || ''} onChange={e => servicechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone || ''} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Role</label>
                                    <select value={role || ''} onChange={e => rolechange(e.target.value)} className="form-control">
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

export default UpdateService














































































// import React, { useState, useEffect } from 'react'
// import { Container, Col, Row, Table, Button } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
// import { IoIosCreate } from 'react-icons/io';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import './RoomService.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { updateservice } from '../../../../Redux/action/ServiceAction';
// import { fetchservices } from '../../../../Redux/action/ServiceAction';
// // import { useDispatch, useSelector } from 'react-redux';







// const UpdateService = () => {

//     // const { id } = useParams();
//     const { serviceId } = useParams();

//     const services = useSelector(state => state.services.item.ser)
//     // const existingUser = services.filter(f => f.id == id);
//     // const {Service_Name , Servive_Charge } = existingUser[0]; 
//     // const [uservice_Name, setUservice_Name] = useState(Service_Name) 
//     // const [uservive_Charge, setUservive_Charge] = useState(Servive_Charge)
//     // const existingUser = services.filter(f => f.id === serviceId);
//     const existingUser = services.filter(f => f.id === serviceId);

//     const { Service_Name, Service_Charge } = existingUser.length > 0 ? existingUser[0] : {};
//     // const [uservice_Name, setUservice_Name] = useState(Service_Name || '');
//     // const [uservive_Charge, setUservive_Charge] = useState(Service_Charge || '');
//     const [uservice_Name, setUservice_Name] = useState(existingUser[0]?.Service_Name || '');
//     const [uservive_Charge, setUservive_Charge] = useState(existingUser[0]?.Servive_Charge || '');




//     const dispatch = useDispatch();
//     const servicess = useSelector(state => state.services.item.ser);

//     const navigate = useNavigate();
//     useEffect(() => {
//         if (servicess.length === 0) {
//             dispatch(fetchservices());
//         }
//     }, [servicess.length, dispatch]);

//     const handleUpdate = (event) => {
//         event.preventDefault();
//         dispatch(updateservice({
//             id: serviceId,
//             uservice_Name:Service_Name,
//             uservive_Charge:Service_Charge,

//             // Service_Name: uservice_Name,
//             // Servive_Charge: uservive_Charge,
//         }))
//         navigate("/service-list")
//     }



//     return (
//         <>
//             <Container style={{ width: "90%", marginTop: "20px" }} >
//                 <Table striped bordered hover className='main-table'>
//                     <thead>
//                         <tr>
//                             <th><h5><AiFillDashboard /> &nbsp;Dasboard / Update Service</h5></th>
//                         </tr>
//                     </thead>
//                 </Table>
//                 <Row>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>
//                                     <div className='table-div'>

//                                         <Button className='table-btn' variant="light" >
//                                             <IoIosCreate />&nbsp;<Link to="/service-list">Go Back</Link>
//                                         </Button>

//                                     </div>
//                                 </th>
//                             </tr>
//                         </thead>
//                     </Table>
//                     <hr />
//                 </Row>
//             </Container>


//             <div className='form-div' >
//                 <Container>
//                     <Row>


//                         <form className="row g-4 p-3 registration-form"
//                             onSubmit={handleUpdate}
//                         >

//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Service Name</label>
//                                 <input type="text" class="form-control"
//                                     name='Service_Name'
//                                     value={uservice_Name} onChange={e => setUservice_Name(e.target.value)}

//                                 />


//                             </div>




//                             <div class="col-md-4 position-relative">
//                                 <label className="label">Service Charges</label>
//                                 <input type="text" class="form-control"
//                                     name='Servive_Charge'
//                                     value={uservive_Charge} onChange={e => setUservive_Charge(e.target.value)}


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
//             </div>

//         </>
//     )
// }

// export default UpdateService
