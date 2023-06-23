import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {  fetchroom } from '../../../../Redux/action/RoomAction';
import Rooms from './Rooms';

const RoomList = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);


  const dispatch = useDispatch()
  const rooms = useSelector(state => state.rooms.item.rom)
  const roomsStatus = useSelector(state => state.rooms.status)
  const error = useSelector(state => state.rooms.error)
  

  // console.log(rooms,"hello")
  useEffect(() => {
    if (roomsStatus === 'idle') {
      dispatch(fetchroom())
    }
  }, [roomsStatus, dispatch])

  let content

  if (roomsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (roomsStatus === 'succeeded') {
    content = rooms.length>0 && rooms.map(room => <Rooms key={room.id} room={room} />)
  } else if (roomsStatus === 'failed') {
    content = <div>{error}</div>
  }

  // const handleModel = () => {
  //   setOpen(true);
  //   setUser(post);
  // }

    
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
                  <th>Action delete</th>
                </tr>
              </thead>
              {content}
           
            </table>
          </Table>
        </Container>

      </div>




    </>

  )
}
export default RoomList;
