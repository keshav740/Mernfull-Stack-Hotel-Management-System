import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import "./RoomService.css"
import axios from 'axios';





const ServicesList = ({ post }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});


  // get api
  const [service, setService] = useState([]);


  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/room-services");
    if (response.status === 200) {
      setService(response.data);
    }
  };

  // console.log("data=>", service);



  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }






  return (

    <>
      <Container className='main-col' >
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
                      <IoIosCreate />&nbsp;<Link to="/services">Create</Link>
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
      <div className='form-div' >
        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room Service Details</h5>
        <Container>
          <Row>




            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Service Name</th>
                    <th>Service Charge</th>
                    <th>Action Edit</th>
                    <th>Action View</th>
                  </tr>
                </thead>
                <tbody>
                  {service?.ser?.map((item, index) => {
                    return (
                      <tr key={index}>
                        {/* <th scope="row">{index + 1}</th> */}
                        <td>{item.Service_Name}</td>
                        <td>{item.Servive_Charge}</td>
                       
                        <td>
                          <Link to="/services">

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
                      </tr>
                    );
                  })}


                </tbody>
              </table>
            </Table>
          </Row>
        </Container>

      </div>




    </>

  )
}
export default ServicesList;
