import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Table, Button } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './RoomService.css'
import axios from "axios"


const UpdateService = () => {


    const params = useParams();
    const navigate = useNavigate();
    const [getSpecificUser, setSpecificUser] = useState("");
    const [name, setName] = useState(getSpecificUser.name);
    const [charge, setCharge] = useState(getSpecificUser.charge);


    console.log(getSpecificUser, "Check id from url")

    useEffect(() => {
        axios.get(`http://localhost:4000/api/v1/room-service/${params.id}`).then((response) => {
            setSpecificUser(response.data);
        })
    }, [])


    const submitform = () => {
        try {
            axios.put(`http://localhost:4000/api/v1/room-service/${params.id}`, {
                "name": name,
                "charge": charge,
            })
            alert("User update Successfully")
            navigate("/service-list")
        } catch (error) {
            console.log(error.response)

        }
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
                            onSubmit={submitform}
                        >

                            <div class="col-md-4 position-relative">
                                <label className="label">Service Name</label>
                                <input type="text" class="form-control"
                                    name='Service_Name'
                                    value={name} onChange={e => setName(e.target.value)}

                                />


                            </div>




                            <div class="col-md-4 position-relative">
                                <label className="label">Service Charges</label>
                                <input type="text" class="form-control"
                                    name='Servive_Charge'
                                    value={charge} onChange={e => setCharge(e.target.value)}


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


































// import React, { useState, useEffect } from 'react'
// import { Container, Col, Row, Table, Button } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, AiFillSetting } from 'react-icons/ai';
// import { IoIosCreate } from 'react-icons/io';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import './RoomService.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { updateservice } from '../../../../Redux/action/ServiceAction';
// import { fetchservices } from '../../../../Redux/action/ServiceAction';








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
