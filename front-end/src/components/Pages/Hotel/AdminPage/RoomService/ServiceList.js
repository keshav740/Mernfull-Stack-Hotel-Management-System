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





const ServiceList = ({ post }) => {

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
      <Container className='mt-4' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Room-Service-Details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/roomservice">Create</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      <div className="post-table">

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room Service Details</h5>
        <Container>
          <Row>


            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Guest Name</th>
                    <th>Phone No.</th>
                    <th>Room No.</th>
                    <th>Service Type</th>
                    <th>Service Date</th>
                    <th>Service Charges</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td>keshav</td>
                    <td>keshav</td>
                    <td>keshav</td>
                    <td>keshav</td>
                    <td>keshav</td>
                    <td>keshav</td>

                    <td>

                      <Link to="/roomservice">
                        <Button className='table-btn' variant="light" >
                          &#9998;Edit
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button className='table-btn' variant="light"
                        onClick={() => handleModel()} >
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

                    </td>

                    {/* <button className="view-btn">View </button> */}
                  </tr>
                </tbody>
              </table>
            </Table>
          </Row>

        </Container>
      </div>




    </>

  )
}
export default ServiceList;
