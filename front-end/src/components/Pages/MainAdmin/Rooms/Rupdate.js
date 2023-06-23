import React, { useState } from 'react'
import { Button, Container, Row, Table, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatroom } from '../../../../Redux/action/RoomAction';
import { AiFillDashboard, AiOutlineDashboard } from 'react-icons/ai';
const Rupdate = () => {

  const { roomId } = useParams();
  const rooms = useSelector(state => state.rooms.item.rom)
  const existingUser = rooms.filter(f => f.id == roomId);
  const { Room_Number, Price, Room_Type, Available_Not } = existingUser.lenght > 0 ? existingUser[0] : {};
  const [uroom_Number, setUroom_Number] = useState(existingUser[0]?.Room_Number || '');
  const [uprice, setUprice] = useState(existingUser[0]?.Price || '');
  const [uroom_Type, setUroom_Type] = useState(existingUser[0]?.Room_Type || '');
  const [uavailable_Not, setUavailable_Not] = useState(existingUser[0]?.Available_Not || '');


  const dispatch = useDispatch();


  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updatroom({
      id: roomId,
      uroom_Number: Room_Number,
      uprice: Price,
      uroom_Type: Room_Type,
      uavailable_Not: Available_Not,
    }))
    navigate("/room-list")
  }
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
            <form className="row g-4 p-3 registration-form"
              onSubmit={handleUpdate}
            >

              <div className="col-md-4 position-relative">
                <label className="label">Room No.</label>
                <input
                  type="text"
                  className="form-control"
                  name="Room_Number"
                  value={uroom_Number} onChange={e => setUroom_Number(e.target.value)}
                // value={Room_Number}
                // onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4 position-relative">
                <label className="label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="Price"
                  // value={Price}
                  // onChange={handleInputChange}
                  value={uprice} onChange={e => setUprice(e.target.value)}
                />
              </div>
              <div className="col-md-4 position-relative" controlId="formGridState" >
                <label className="form-label">Room Type</label>
                <Form.Select name="Room_Type"
                  //    value={Room_Type}
                  //  onChange={handleInputChange}
                  value={uroom_Type} onChange={e => setUroom_Type(e.target.value)}
                >
                  <option>Choose</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Delux">Delux</option>
                  <option value="Normal">Normal</option>
                  <option value="Super Delux">Super Delux</option>
                </Form.Select>
              </div>
              <div className="col-md-4 position-relative" controlId="formGridState">
                <label className="form-label">Available/Not-Available</label>
                <Form.Select name="Available_Not"
                  //   value={Available_Not}
                  // onChange={handleInputChange}
                  value={uavailable_Not} onChange={e => setUavailable_Not(e.target.value)}
                >
                  <option>Choose</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </div>
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
  )
}

export default Rupdate