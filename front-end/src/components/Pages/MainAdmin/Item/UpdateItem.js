import React,{useState} from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateitems } from '../../../../Redux/action/AddItemAction';
import { AiFillDashboard } from 'react-icons/ai';
import { IoIosCreate } from 'react-icons/io';
const UpdateItem = () => {

    const {id} = useParams();
    const items = useSelector(state => state.items. data)
    const existingUser = items.filter(f => f.id == id);
    const {itemname,price,categories, } = existingUser[0]; 
    const [uitemname, setItemname] = useState(itemname) 
    const [uprice, setPrice] = useState(price)
    const [ucategories,setCategories] = useState(categories)


    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateitems({
            id:id,
            itemname:uitemname,
            price: uprice,
            categories:ucategories,
            
        }))
        navigate("/item-list")
    }
    return (
        <>
            <Container style={{ width: "90%", marginTop: "20px" }} >
                <Table striped bordered hover className='main-table'>
                    <thead>
                        <tr>
                            <th><h5><AiFillDashboard /> &nbsp;Dasboard / Add New Item</h5></th>
                        </tr>
                    </thead>
                </Table>
                <Row>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <div className='table-div'>

                                        <Button className='table-btn' variant="light" >
                                            <IoIosCreate />&nbsp;<Link to="/item-list">Go Back</Link>
                                        </Button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </Table>
                    <hr />
                </Row>
            </Container>

            {/* form section start */}
            <div className='form-div' >
                <Container>
                    <Row>

                        <center>
                            <h3>Update</h3>
                        </center>
                        <form className="row g-4 p-3 registration-form"
                          onSubmit={handleUpdate} 
                        >

                            <div class="col-md-4 position-relative">
                                <label className="label">Item Name</label>
                                <input type="text" class="form-control"
                                    value={uitemname} onChange={(event) => setItemname(event.target.value)}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Price.</label>
                                <input type="text" class="form-control"
                                    value={uprice} onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label className="label">Categories</label>
                                <input type="text" class="form-control"
                                    value={ucategories} onChange={(event) => setCategories(event.target.value)}
                                />
                            </div>
                            <center>
                                <Button className="stu_btn"
                                    variant="success"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </center>

                        </form>
                    </Row>
                </Container>
            </div>


        </>
    )
}

export default UpdateItem