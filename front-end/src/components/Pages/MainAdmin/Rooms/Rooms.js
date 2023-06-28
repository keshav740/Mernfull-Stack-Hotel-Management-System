import React,{useEffect,useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const Rooms = ({ room,post }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  
  const handleModel = () => {
    setOpen(true);
    setUser(post);
  }
  return (
    <>
      <tbody>
        <tr>
          <td>{room.Room_Number}</td>
          <td>{room.Price}</td>
          <td>{room.Room_Type}</td>
          <td>{room.Available_Not}</td>
          
          <td>
            {/* <Link to={`/roomedit/${room.id}`}> */}
            <Button className='table-btn' variant="light" >
              &#9998;Edit
            
            </Button>
            {/* </Link> */}
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

        </tr>
      </tbody>

    </>
  )
}

export default Rooms