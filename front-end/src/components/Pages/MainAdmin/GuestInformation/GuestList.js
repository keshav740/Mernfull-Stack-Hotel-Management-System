import React from 'react'

const GuestList = () => {
  return (
    <div>
      
    </div>
  )
}

export default GuestList
























































// import React, { useEffect, useState } from 'react'
// import { Button, Container, Row, Table } from 'react-bootstrap'
// import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
// import { Link } from "react-router-dom"
// import { IoIosCreate } from "react-icons/io";
// import ModalCamp from './ModalCamp';
// import axios from "axios"





// const GuestList = ({ post }) => {

//   const [open, setOpen] = useState(false);
//   const [user, setUser] = useState({});
//   const [guest, setGuest] = useState([])


//   useEffect(() => {
//     getGuests()
//   }, [])

//   const getGuests = async () => {
//     const response = await axios.get("http://localhost:4000/api/v1/guests")
//     if (response.status === 200) {
//       setGuest(response.data)
//     }
//   }
//   console.log(guest)
//   const handleModel = () => {
//     setOpen(true);
//     setUser(post);

//   }




//   return (

//     <>
//       <Container className='main-col'  >
//         <Table striped bordered hover className='main-table'>
//           <thead>
//             <tr>
//               <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Guest-Details</h5></th>
//             </tr>
//           </thead>
//         </Table>
//         <Row>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>
//                   <div className='table-div' >

//                     <Button className='table-btn' variant="light" >
//                       <IoIosCreate />&nbsp;<Link to="/add-guest">Create</Link>
//                     </Button>
//                   </div>
//                 </th>
//               </tr>
//             </thead>
//           </Table>
//           <hr />
//         </Row>
//       </Container>


//       {/* <div className="post-table"> */}
//       <div className='form-div'>

//         <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Guest-Details</h5>
//         <Container>


//           <Table responsive>
//             <table class="table table-bordered border-secondary">
//               <thead>
//                 <tr>
//                   <th>S.No</th>
//                   <th>Guest Name</th>
//                   <th>Guest Number</th>
//                   <th>Room Quantity</th>
//                   <th>Room No.</th>
//                   <th>Guest Address</th>
//                   <th>Action Edit</th>
//                   <th>Action View</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {guest?.gue?.map((guest, index) => {
//                   return (
//                     <tr key={index}>
//                       <th scope='row'>{index + 1}</th>
//                       <td>{guest.Guest_Name}</td>
//                       <td>{guest.Guest_Number}</td>
//                       <td>{guest.Room_Quantity}</td>
//                       <td>{guest.Room_Number}</td>
//                       <td>{guest.Address}</td>
//                       <td>
//                         <Link to={`/update/${guest.id}`}>

//                           <Button className='table-btn' variant="light" >
//                             &#9998;Edit
//                           </Button>
//                         </Link>
//                       </td>
//                       <td>
//                         <Link to={`/view/${guest.id}`}>
//                           <Button className='table-btn' variant="light"
//                             onClick={() => handleModel()} >
//                             &#128065;View
//                           </Button>
//                           {open && (
//                             <ModalCamp

//                               open={open}
//                               setOpen={setOpen}
//                               // updatePost={updatePost}
//                               {...user}
//                             />
//                           )}
//                         </Link>
//                       </td>
//                     </tr>

//                   )
//                 })}
//                 <tr>




//                   {/* <button className="view-btn">View </button> */}
//                 </tr>
//               </tbody>
//             </table>
//           </Table>
//         </Container>

//       </div>




//     </>

//   )
// }
// export default GuestList;
