import React, { useEffect, useState } from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { AiFillDashboard, AiFillDelete, AiFillEdit, } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { IoIosCreate } from "react-icons/io";
// import ModalCamp from './ModalCamp';
// import { fetchAitems } from '../../../../Redux/action/AddItemAction'
import Item from './Item'
import { fetchItems } from '../../../../Redux/action/AddItemAction'


const ItemList = ({ post }) => {

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const handleModel = () => {
    setOpen(true);
    setUser(post);

  }

  const dispatch = useDispatch()
  const Items = useSelector(state => state.Items.item.items)
  const ItemsStatus = useSelector(state => state.Items.status)
  const error = useSelector(state => state.Items.error)


console.log(Items,"saloni")

  useEffect(() => {
    if (ItemsStatus === 'idle') {
      dispatch(fetchItems())
    }
  }, [ItemsStatus, dispatch])

  let content

  if (ItemsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (ItemsStatus === 'succeeded') {
    content = Items.lenght>0 && Items.map(additem => <Item key={additem.id} additem={additem} />)
  } else if (ItemsStatus === 'failed') {
    content = <div>{error}</div>
  }



  return (

    <>
      <Container className='main-col'  >
        <Table striped bordered hover className='main-table'>
          <thead>
            <tr>
              <th><h5><AiFillDashboard /> &nbsp; Dashboard/ Item-Details</h5></th>
            </tr>
          </thead>
        </Table>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <div className='table-div' >

                    <Button className='table-btn' variant="light" >
                      <IoIosCreate />&nbsp;<Link to="/add-item">Create</Link>
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
          </Table>
          <hr />
        </Row>
      </Container>


      {/* <div className="post-table"> */}
      <div className='form-div'>

        <h5 className="w3-center w3-flat-midnight-blue w3-padding-48 w3-border-blue-grey w3-grey text text-center mb-5 mt-3">Item-Details</h5>
        <Container>
          <Row>


            <Table responsive>
              <table class="table table-bordered border-secondary">
                <thead>
                  <tr>

                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Catrgories</th>
                    <th>Action Edit</th>
                    {/* <th>Action View</th> */}
                  </tr>
                </thead>
                {content}
              
              </table>
            </Table>
          </Row>
        </Container>

      </div>




    </>

  )
}
export default ItemList;
