import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
  console.log(service.Name)


  return (

    <>
      <tbody>
        <tr>
          <td>{service.Service_Name}</td>
          <td>{service.Servive_Charge}</td>
          <td>
          <Link to={`/serviceEdit/${service._id}`}>
              {/* <Link to="/serviceEdit/:id"> */}

              <Button className='table-btn' variant="light" >
                &#9998;Edit
              </Button>
            </Link>
          </td>

          {/* <Link to={`/edit/${post.id}`} className="view-btn"> Edit </Link> */} 

        </tr>
      </tbody>


    </>

  )
}

export default Service
