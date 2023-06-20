import React from 'react'

const Service = ({ service }) => {


  return (

    <>

      <tbody>
        <tr>
          <td>{service.Service_Name}</td>
          <td>{service.Servive_Charge}</td>

        </tr>
      </tbody>


    </>
    
  )
}

export default Service
