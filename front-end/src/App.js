
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Dashboard from './components/Pages/Hotel/AdminPage/Dashboard/Dashboard'
import HotelSidebar from './components/Pages/Hotel/HotelSidebar';
import RoomBooking from './components/Pages/Hotel/AdminPage/RoomBooking/RoomBooking';
import RoomService from './components/Pages/Hotel/AdminPage/RoomService/RoomService';
import Billing from './components/Pages/Hotel/AdminPage/Billing/Billing';
import Header from "./components/Header/Header";
import BookingList from "./components/Pages/Hotel/AdminPage/RoomBooking/BookingList";
import ServiceList from "./components/Pages/Hotel/AdminPage/RoomService/ServiceList";
import MainAdminSidebar from "./components/Pages/MainAdmin/MainAdminSidebar/MainAdminSidebar";
import AdminDashboard from "./components/Pages/MainAdmin/Dashboard/Dashboard";
// import Item from "./components/Pages/MainAdmin/Item/Items";
import ItemList from "./components/Pages/MainAdmin/Item/ItemList";
// import Room from "./components/Pages/MainAdmin/Rooms/Rooms";
import RoomList from "./components/Pages/MainAdmin/Rooms/RoomList";
import AddService from "./components/Pages/MainAdmin/AddService/AddService";
import ServicesList from "./components/Pages/MainAdmin/AddService/ServicesList";
import Guest from "./components/Pages/MainAdmin/GuestInformation/Guest";
import GuestList from "./components/Pages/MainAdmin/GuestInformation/GuestList";
import ResDashboard from "./components/Pages/Restaurent/ResDashboard/ResDashboard";
import RestaurentSidebar from "./components/Pages/Restaurent/RestaurentSidebar";
import Order from "./components/Pages/Restaurent/Order/Order";
import ResBilling from "./components/Pages/Restaurent/Res-Billing/ResBilling";
import { ToastContainer } from "react-bootstrap";
import RoomForm from "./components/Pages/MainAdmin/Rooms/RoomForm";
import HotelRooms from "./components/Pages/Hotel/AdminPage/HotelRoom/HotelRooms";
import EmployeesForm from "./components/Pages/MainAdmin/Employees/Employeesform";
import EmployeesList from "./components/Pages/MainAdmin/Employees/EmployeesList";
import UpdateService from "./components/Pages/MainAdmin/AddService/UpdateService";
import Employees from "./components/Pages/MainAdmin/Employees/Employees";
import GuestUpdate from "./components/Pages/MainAdmin/GuestInformation/GuestUpdate";
import ItemsForm from "./components/Pages/Restaurent/Items/ItemsForm";
import AddItem from "./components/Pages/MainAdmin/Item/AddItems";
// import UpdateItem from "./components/Pages/MainAdmin/Item/UpdateItem";


//



function App() {


  return (
    <>
      <Header />
      <ToastContainer position="top-center" />
      <Routes>

        <Route>

          <Route path='/' element={<Home />} />

          {/* hotel  sidebar routing start*/}
          <Route path="hotel-dashboard" element={<HotelSidebar><Dashboard /></HotelSidebar>} />
          <Route path='/roombooking' element={<RoomBooking />} />
          <Route path='/booking/:id' element={<RoomBooking />} />
          <Route path='/roomlist' element={<HotelSidebar><BookingList /></HotelSidebar>} />
          <Route path="/room-service-lists" element={<HotelSidebar><ServiceList /></HotelSidebar>} />
          <Route path='/hotel-rooms' element={<HotelSidebar><HotelRooms /></HotelSidebar>} />
          <Route path='/billing' element={<Billing />} />
          <Route path='/roomservice' element={<HotelSidebar><RoomService /></HotelSidebar>} />
          {/* hotel  sidebar routing end*/}


          {/* Restaurent  sidebar routing start*/}
          <Route path="/restaurent-dashboard" element={<RestaurentSidebar><ResDashboard /></RestaurentSidebar>} />
          <Route path="/res-items" element={<RestaurentSidebar><ItemsForm /></RestaurentSidebar>} />
          <Route path="/order" element={<RestaurentSidebar><Order /></RestaurentSidebar>} />
          <Route path="/res-billing" element={<RestaurentSidebar><ResBilling /></RestaurentSidebar>} />

          {/* Restaurent  sidebar routing end*/}



          {/* Admin  sidebar routing start*/}
          <Route path="/main-admin-dashboard" element={<MainAdminSidebar><AdminDashboard /></MainAdminSidebar>} />
          <Route path="/add-item" element={<MainAdminSidebar><AddItem /></MainAdminSidebar>} />
          <Route path="/item-list" element={<MainAdminSidebar><ItemList /></MainAdminSidebar>} />
          {/* <Route path="/edit/:id" element={<MainAdminSidebar><UpdateItem /></MainAdminSidebar>} /> */}
          {/* rooms and employee  */}
          <Route path="/add-rooms" element={<MainAdminSidebar><RoomForm /></MainAdminSidebar>} />
          <Route path="/room-list" element={<MainAdminSidebar><RoomList /></MainAdminSidebar>} />
          <Route path="/employees" element={<MainAdminSidebar><EmployeesForm /></MainAdminSidebar>} />
          <Route path="/employees-list" element={<MainAdminSidebar><EmployeesList /></MainAdminSidebar>} />
          {/* rooms and employee  */}
          {/* <Route path="/room-service-list"  element={<MainAdminSidebar><RoomServiceList/></MainAdminSidebar>}/> */}
          <Route path="/services" element={<MainAdminSidebar><AddService /></MainAdminSidebar>} />
          <Route path="/service-list" element={<MainAdminSidebar><ServicesList /></MainAdminSidebar>} />
          <Route path="/serviceEdit/:id" element={<MainAdminSidebar><UpdateService /></MainAdminSidebar>} />
          <Route path="/employees" element={<MainAdminSidebar><EmployeesForm /></MainAdminSidebar>} />
          <Route path="/employees" element={<MainAdminSidebar><Employees /></MainAdminSidebar>} />
          <Route path="/add-guest" element={<MainAdminSidebar><Guest /></MainAdminSidebar>} />
          <Route path="/guest-details" element={<MainAdminSidebar><GuestList /></MainAdminSidebar>} />
          <Route path="/guestEdit/:id" element={<MainAdminSidebar><GuestUpdate /></MainAdminSidebar>} />
          {/* Admin  sidebar routing end*/}
      
        </Route>
      </Routes>


     
    </>
  );
}

export default App;
