import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
import ModalCamp from './ModalCamp';
import axios from "axios";
import Employees from './Employees'
import { fetchemployees } from '../../../../Redux/action/EmployeeAction'



const EmployeesList = ({post}) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  // const handleModel = () => {
  //   setOpen(true);
  //   setUser(post);
    const dispatch = useDispatch()
    const employees = useSelector(state => state.employees.item.emp)
    const employeesStatus = useSelector(state => state.employees.status)
    const error = useSelector(state => state.employees.error)
    
  
    // console.log(employees,"hello")
    useEffect(() => {
      if (employeesStatus === 'idle') {
        dispatch(fetchemployees())
      }
    }, [employeesStatus, dispatch])

    let content
  
    if (employeesStatus === 'loading') {
      content = <div>Loading...</div>
    } else if (employeesStatus === 'succeeded') {
      content = employees.length>0 && employees.map(employe => <Employees key={employe.id} employe={employe} />)
    } else if (employeesStatus === 'failed') {
      content = <div>{error}</div>
    }
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


      <div className='form-div'>

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Employee-Details</h5>
        <Container>


          <Table responsive>
            <table class="table table-bordered border-secondary">
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Salary</th>
                  <th>Action Edit</th>
                  <th>Action View</th>
                  <th>Delete View</th>
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
     
      export default EmployeesList;
