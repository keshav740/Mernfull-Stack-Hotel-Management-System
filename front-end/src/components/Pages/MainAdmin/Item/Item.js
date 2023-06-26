import React from 'react'
import { Button } from 'react-bootstrap';
import {  useNavigate, useParams } from "react-router-dom";
const Item = ({ additem }) => {
  const navigate  = useNavigate("");
  return (
    <>
      <tbody>
        <tr>
          <td>{additem.Item_Name}</td>
          <td>{additem.price}</td>
          <td>{additem.Category_Name}</td>
          <td>
            <Button className='table-btn' variant="light" onClick={() => navigate(`/edit/${additem.id}`)} > &#9998;Edit</Button>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default Item;