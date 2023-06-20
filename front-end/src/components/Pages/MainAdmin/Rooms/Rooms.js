import React from 'react'

const Rooms = ({ room }) => {
  return (
   <>
   
   
   <tbody>
        <tr>

          <td>{room.roomNumber}</td>
          <td>{room.price}</td>
          <td>{room.roomType}</td>
          <td>{room.availableNot}</td>
         

 
        </tr>
      </tbody>
   
   </>
  )
}

export default Rooms