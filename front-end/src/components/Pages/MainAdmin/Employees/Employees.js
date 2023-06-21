import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Employees = ({employe}) => {
  return (
   <>
   
   <tbody>
        <tr>

          <td>{employe.Employee_Name}</td>
          <td>{employe.Phone_Number}</td>
          <td>{employe.Address}</td>
          <td>{employe.Email}</td>
          <td>{employe.Dob}</td>
          {/* <td>{employe.Role}</td> */}
          <td>{employe.Salary}</td>
          <td>
            <Link to={`/emp/${employe.id}`}>
            <Button className='table-btn' variant="light" >
              &#9998;Edit
            </Button>
            </Link>
          </td>
          <td>
            <Button className='table-btn' variant="light" >
            &#128065;View
            </Button>
          </td>
          <td>
            <Button className='table-btn' variant="light" >
              &#9998;Delete
            </Button>
          </td>

          {/* <button className="view-btn">View </button> */}
        </tr>
      </tbody>
   
   
   </>
  )
}

export default Employees