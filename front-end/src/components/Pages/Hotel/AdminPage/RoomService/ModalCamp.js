import React, { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";






const ModalCamp = ({
  open,
  setOpen,
}) => {



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
                <p>Guest Name</p>
                <p>Phone No.</p>
                <p>Room No.</p>
                <p>Service Type</p>
                <p>Service Date</p>
                <p>Service Charges</p>
            


                <Button className="float-end modal-delete" variant="light"
                  onClick={() => setOpen(false)}>Delete</Button>

              </Col><br /><br />




            </Row>
          </Container>

        </Modal.Body>

      </Modal>


    </>
  );
};

export default ModalCamp;