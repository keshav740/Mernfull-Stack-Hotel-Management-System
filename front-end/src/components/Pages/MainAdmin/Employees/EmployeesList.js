import React, { useEffect, useState } from 'react'
// import MainLayout from '../../Admin/Pages/MainLayout'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchleaves } from '../../reducer/action/leaveAction'
// import Leave from './Leave'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from "axios";
import { toast } from 'react-toastify';






const EmployeesList = ({ post }) => {

  // get api
  const [data, setData] = useState([]);


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/employees");
    if (response.status === 200) {
      setData(response.data);
    }
  };


  // const onDeleteUser = async (id) => {
  //   if (window.confirm("Are you sure you want to delete this employee record?")) {
  //     try {
  //       const response = await axios.delete(`http://localhost:4000/api/v1/employee/${id}`);
  //       if (response.status === 200) {
  //         toast.success(response.data);
  //         getUsers();
  //       }
  //     } catch (error) {
  //       // Handle error
  //       console.error("Error deleting user:", error);
  //       toast.error("An error occurred while deleting the user.");
  //     }
  //   }
  // };




  const onDeleteUser = async (id) => {
    if (window.confirm("Are you sure that you wanted to delete that employee record")) {
      const response = await axios.delete(`http://localhost:4000/api/v1/employee/${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        getUsers();
      }
    }
  }



  console.log("data=>", data);



  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});



  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }


  //   const dispatch = useDispatch()
  //   const leaves = useSelector(state => state.leaves.item)
  //   const leavesStatus = useSelector(state => state.leaves.status)
  //   const error = useSelector(state => state.leaves.error)



  //   useEffect(() => {
  //     if (leavesStatus === 'idle') {
  //       dispatch(fetchleaves())
  //     }
  //   }, [leavesStatus, dispatch])

  //   let content

  //   if (leavesStatus === 'loading') {
  //     content = <div>Loading...</div>
  //   } else if (leavesStatus === 'succeeded') {
  //     content = leaves.map(leave => <Leave key={leave.id} leave={leave} />)
  //   } else if (leavesStatus === 'failed') {
  //     content = <div>{error}</div>
  //   }



  return (

    <>
      <Container className='main-col' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Employee-Details</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div' >

                    <Button className='table-btn' variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/employees">Create</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      {/* <div className="post-table"> */}
      <div className='form-div'>

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Employee-Details</h5>
        <Container>


          <Table responsive>
            <table class="table table-bordered border-secondary">
              <thead>
                <tr>

                  <th>Employee Name</th>
                  <th>Phone Number</th>
                  <th>Gender</th>
                  <th>Salary</th>
                  <th>Role</th>
                  <th>Action Edit</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr> */}
                {data?.emp?.map((item, index) => {
                  return (
                    <tr key={index}>
                      {/* <th scope="row">{index + 1}</th> */}
                      <td>{item.Employee_Name}</td>
                      <td>{item.Phone_Number}</td>
                      <td>{item.Gender}</td>
                      <td>{item.Salary}</td>
                      <td>{item.Role}</td>
                      {/* <td>{item.Dob}</td> */}
                      {/* <td>{item.Address}</td> */}
                      {/* <td>{item.Email}</td> */}




                      <td>
                        <Link to={`/empupdate/${item.id}`}>

                          <Button className='table-btn' variant="light" >
                            &#9998;Edit
                          </Button>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/empview/${item.id}`}>
                          <Button className='table-btn' variant="light"
                            onClick={() => handleModel()}
                          >
                            &#128065;View
                          </Button>
                          {open && (
                            <ModalCamp

                              open={open}
                              setOpen={setOpen}
                              // updatePost={updatePost}
                              {...user}
                            />
                          )}
                        </Link>

                      </td>

                      <td>
                        {/* <Link> */}

                        <Button className='table-btn' variant="light"
                          onClick={() => onDeleteUser(item.id)}>
                          &#9998;Delete
                        </Button>
                        {/* </Link> */}
                      </td>

                      {/* <td>{item.Gender}</td> */}

                    </tr>
                  );
                })}

                {/* <td>keshav</td>
<td>keshav</td>
<td>keshav</td>
<td>keshav</td>
<td>keshav</td> */}


                {/* <td>
  <Link to="/employees">
  
    <Button className='table-btn' variant="light" >
        &#9998;Edit
    </Button> 
    </Link>                   
</td> */}


                {/* <button className="view-btn">View </button> */}
                {/* </tr> */}
              </tbody>

            </table>
          </Table>
        </Container>

      </div>




    </>

  )
}
export default EmployeesList;
