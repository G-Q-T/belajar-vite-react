import {Card,Button, Table,Modal,Form} from "react-bootstrap";
import { useState } from "react";

const dataUser = [
    {
        id: 1,
        name:"Jamal",
        email:"jamal12@gmail.com",
        password: "12345"
    },
    {
        id: 2,
        name:"zull",
        email:"zull2@gmail.com",
        password: "12345"
    },
    {
        id: 3,
        name:"kikir",
        email:"kikir12@gmail.com",
        password: "12345"
    },
];

const ListUser = () => {
    const _initForm = {
        id: null,
        name: "",
        email: "",
        password: "",
        status: "Active",
    };
    const [users, setUsers] = useState(dataUser);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(_initForm);

    const handleOpenModal = () => {
        setFormData(_initForm);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            ...formData,
            id: Date.now(),
        };
        setUsers([...users, newUser]);
        setShowModal(false);
        setFormData(_initForm);
    };

    return (
        <>
            <Card className="shadow-sm border-0">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h4 className="mb-0 font-weight-bold">Data user</h4>
                        </div>
                        <Button variant="primary" onClick={handleOpenModal}>
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
                            {users.map((user, index) => (
                                <tr key={user.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>Active</td>
                                    <td>
                                        <Button variant="info" size="sm" className="me-2">edit</Button>
                                        <Button variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

export default ListUser;