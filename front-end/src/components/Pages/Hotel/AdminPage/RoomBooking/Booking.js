import React from 'react'
import { Button } from 'react-bootstrap'

const Booking = ({book}) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{book.Guest_Name}</td>
          <td>{book.Guest_Number}</td>
          <td>{book.Address}</td>
          <td>{book.Email}</td>
          <td>{book.Room_Number}</td>
          <td>{book.Booking_Date_Time}</td>
          <td>{book.Checkout_Date_Time}</td>
          <td>{book.Checkin_Date_Time}</td>
          <td>{book.Number_Of_Children}</td>
          <td>{book.Number_Of_Adults}</td>
          <td>{book.Special_Request}</td>
          
          <td>
          {/* <Link to={`/serviceEdit/${book._id}`}> */}
              {/* <Link to="/serviceEdit/:id"> */}

              <Button className='table-btn' variant="light" >
                &#9998;Edit
              </Button>
            {/* </Link> */}
          </td>

          {/* <Link to={`/edit/${post.id}`} className="view-btn"> Edit </Link> */} 

        </tr>
      </tbody>
    
    
    </>
  )
}

export default Booking
