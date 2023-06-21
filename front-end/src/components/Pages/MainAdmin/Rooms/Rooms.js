import React from 'react'
import { Button } from 'react-bootstrap'

const Rooms = ({ room }) => {
  return (
    <>


      <tbody>
        <tr>

          <td>{room.Room_Number}</td>
          <td>{room.Price}</td>
          <td>{room.Room_Type}</td>
          <td>{room.Available_Not}</td>
          <td>
            <Button className='table-btn' variant="light" >
              &#9998;Edit
            </Button>
          </td>
          <td>
            <Button className='table-btn' variant="light" >
            &#128065;View
            </Button>
          </td>
          <td>
            <Button className='table-btn' variant="light" >
              &#9998;Update
            </Button>
          </td>
        </tr>
      </tbody>

    </>
  )
}

export default Rooms