import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GuestMap = ({ guest }) => {

 const handleDelete =(code)=>{
  if(window.confirm("Do you want to remove?")){
    
  }

 }


  return (
    <>
      <tbody>
        <tr>

          <td>{guest.Guest_Name}</td>
          <td>{guest.Guest_Number}</td>
          <td>{guest.Room_Quantity}</td>
          <td>{guest.Room_Number}</td>
          <td>{guest.Address}</td>

          {/* <td>{guest.Email}</td>
          <td>{guest.Booking_Date_Time}</td>
          <td>{guest.Checkin_Date_Time}</td>
          <td>{guest.Number_Of_Children}</td>   
          <td>{guest.Number_Of_Adults}</td> */}

          <td><Link to={`/guestEdit/${guest.id}`}>

            <Button className='table-btn' variant="light" >
              &#9998;Edit
            </Button>
          </Link>
          </td>

          <td>
            {/* <Link to={`/guestEdit/${guest.id}`}> */}

            <Button onClick={()=>{handleDelete(guest.id)}} className='table-btn' variant="light" >
              &#9998;Delete
            </Button>
          {/* </Link> */}
          </td>

          {/* <td>
                        <Link to={`/view/${guest.id}`}>
                          <Button className='table-btn' variant="light"
                            // onClick={() => handleModel()}
                             >
                            &#128065;View
                          </Button> */}
          {/* {open && (
                            <ModalCamp

                              open={open}
                              setOpen={setOpen}
                              // updatePost={updatePost}
                              {...user}
                            />
                          )} */}
          {/* </Link>
                      </td> */}





        </tr>
      </tbody>

    </>
  )
}

export default GuestMap