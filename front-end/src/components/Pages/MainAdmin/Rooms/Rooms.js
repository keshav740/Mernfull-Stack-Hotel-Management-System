import React,{useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteroom } from '../../../../Redux/action/RoomAction';
const Rooms = ({ room }) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteroom());
  }, []);


  return (
    <>


      <tbody>
        <tr>

          <td>{room.Room_Number}</td>
          <td>{room.Price}</td>
          <td>{room.Room_Type}</td>
          <td>{room.Available_Not}</td>
          <td>
            <Link to={`/edit/${room.id}`}>
            <Button className='table-btn' variant="light" >
              &#9998;Edit
              {/* {isUpdating ? 'Update' : 'Add'} */}
            </Button>
            </Link>
          </td>
          <td>
            <Button className='table-btn' variant="light" >
            &#128065;View
            </Button>
          </td>
          <td>
            <Button className='table-btn' variant="light"
          
            >
              &#9998;Delete
             
            </Button>
          </td>
        </tr>
      </tbody>

    </>
  )
}

export default Rooms