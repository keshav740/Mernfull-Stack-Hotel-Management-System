import React, { useState } from 'react'
import './RestaurentSidebar.css'
import { FaBars, FaTh, } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { GiOpenedFoodCan, } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bs";
import { MdBorderColor } from 'react-icons/md';
import { RiBillFill } from 'react-icons/ri';
const RestaurentSidebar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [

    {
      path: "/restaurent-dashboard",
      name: "Dashboard",
      icon: <FaTh />
    },

    {
      path: "/res-items",
      name: "Items ",
      icon: <GiOpenedFoodCan />
    },

    {
      path: "/order",
      name: "Order",
      icon: <MdBorderColor />
    },
    {
      path: "/res-billing",
      name: "Bill",
      icon: <RiBillFill />
    },
  ]


  return (
    <>

      <div className="container-fluid  ">
        <div style={{ width: isOpen ? "200px" : "50px", paddingTop: "20px" }} className='sidebar'>
          <div className='top_section'>
            <p style={{ display: isOpen ? "block" : "none" }} className='logo'>
              <span>Restaurent</span>
            </p>
            <div style={{ marginLeft: isOpen ? "20px" : "15px", paddingTop: "15px" }} className='bars'>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <Link to={item.path} key={index} className="link"
                activeclassName="active">
                <div className='icon'> {item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className='Link_text'>{item.name}</div>
              </Link>
            ))
          }
        </div>
        <main style={{ width: "100%", height: "100vh", overflow: "scroll" }}>{children}</main>
      </div>



    </>
  )
}

export default RestaurentSidebar