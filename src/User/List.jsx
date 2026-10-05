import {Card,Button, Table,Modal,Form} from "react-bootstrap";
import { useState } from "react";

const dataUser = [
    {
        name:"Jamal",
        email:"jamal12@gmail.com",
        password: "12345"
    },
    {
        name:"zull",
        email:"zull2@gmail.com",
        password: "12345"
    },
    {
        name:"kikir",
        email:"kikir12@gmail.com",
        password: "12345"
    },
];
const ListUser = () =>{
      const _initForm = {
        id:null,
        name:"",
        email:"",
        password:"",
        status:"Active",
    };
    const [users, setUsers] = useState(dataUser);
    const [showModal,setShowModal] = useState(false);
    const [formData,setFormData] = useState(_initForm)

    
    const handleOpenModal = () =>{
        setShowModal(true);
    };
     const handleCloseModal = () =>{
        setShowModal(false);
    };
     const newUser ={
        ...formData,
        id: Date.now(),
    };

    setUsers([...users,newUser]);
    setShowModal(false);

    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]: e.target.value,
        });
    };

    
    return(

        <>
        <Card className="shadow-sm border-0">
        <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h4 className="mb-0 font-weight-bold">Data user</h4>
            </div>
            <Button variant="Primary" onClick={handleOpenModal}>
                Create new user
            </Button>
        </div>
        <Table className="align-middle mb-0">
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index)=>(
            <tr>
                <td>{index + 1 }</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Active</td>
                <td>
                    <Button variant ="info" size="sm" className="me-2">edit</Button>
                    <Button variant ="danger" size="sm" className="me-2">Delete</Button>
                </td>
            </tr>

            ))}
        </tbody>
        </Table>
        </Card.Body>
        </Card>
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure!</Modal.Body>
        <form action="" method="post">
     <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control value={FormData.name} onChange={handleChange} type="text" name="name" placeholder="Enter Name" required></Form.Control>
     </Form.Group>
     <Form.Group className="mb-3">
         <Form.Label>Email</Form.Label>
        <Form.Control value={formData.email} onChange={handleChange} type="Email" name="email" placeholder="Enter Email" required></Form.Control>
     </Form.Group>
      <Form.Group className="mb-3">
         <Form.Label>Password</Form.Label>
        <Form.Control value={formData.password} onChange={handleChange} type="password" name="password" placeholder="Enter password" required></Form.Control>
     </Form.Group>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    ); 
};
export default ListUser;