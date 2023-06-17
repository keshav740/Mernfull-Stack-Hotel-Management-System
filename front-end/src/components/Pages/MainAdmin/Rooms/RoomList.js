import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios'


const RoomList = ({ post }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/v1/rooms");
    if (response.status === 200) {
      setData(response.data);
    }
  }
  console.log("data=>", data)

  return (

    <>
      <Container className='main-col' >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Room-Details</h5></th>
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
                      <IoIosCreate />&nbsp;<Link to="/add-rooms">Create</Link>
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

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Room-Details</h5>
        <Container>


          <Table responsive>
            <table class="table table-bordered border-secondary">
              <thead>
                <tr>

                  <th>Room No.</th>
                  <th>Price</th>
                  <th>Room Type</th>
                  <th>Available/Not Available</th>
                  <th>Action Edit</th>
                  <th>Action View</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => {
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{item.Room_Number}</td>
                      <td>{item.Price}</td>
                      <td>{item.Room_Type}</td>
                      <td>{item.Avilable_Not}</td>
                      <td>
                        <Button className='table-btn' variant="light">&#9998;Edit</Button>
                      </td>
                      <td>
                        <Button className='table-btn' variant="light">&#128065;View</Button>
                      </td>
                      {/* <td>

                        <Link to="/rooms">
                          <Button className='table-btn' variant="light" >
                            &#9998;Edit
                          </Button>
                        </Link>
                      </td> */}
                      {/* <td>
                        <Button className='table-btn' variant="light"
                          onClick={() => handleModel()} >
                          &#128065;View
                        </Button>
                        {open && (
                          <ModalCamp

                            open={open}
                            setOpen={setOpen}
                            updatePost={updatePost}
                            {...user}
                          />
                        )}
                      </td> */}
                    </tr>
                  })
                }
              </tbody>
            </table>
          </Table>
        </Container>

      </div>




    </>

  )
}
export default RoomList;
