import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";






const ModalCamp = ({
  open,
  setOpen,
}) => {

  // const [data, setData] = useState([]);

  // const getUsers = async () => {
  //   const response = await axios.get("http://localhost:4000/api/v1/employees");
  //   if (response.status === 200) {
  //     setData(response.data);
  //   }
  // };

  // const onDeleteUser = async (id) => {
  //   if(window.confirm("Are you sure that you wanted to delete that employee record")){
  //   const response = await axios.delete(`http://localhost:4000/api/v1/employees/${id}`);
  //   if(response.status === 200){
  //     toast.success(response.data);
  //     getUsers();
  //   }
  //   }

  // }



  return (
    <>
      <Modal style={{ width: "100%", height: "100%" }}
        show={open}
        onHide={() => setOpen(false)}
        size="small"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title> &#128968; &nbsp;Room Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container>
            <Row>

              <Col sm={12}>

              <p>Employee Name</p>
          <p>Phone Number</p>
          <p>Gender</p>
          <p>Salary</p>
          <p>Role</p>
          <p>Address</p>
          <p>D.O.B</p>
          <p>Email  </p>


                <Button className="float-end modal-delete" variant="light"
                  // onClick={() => onDeleteUser(item.id)}
                  > Delete </Button>

              </Col><br /><br />




            </Row>
          </Container>

        </Modal.Body>

      </Modal>


    </>
  );
};

export default ModalCamp;