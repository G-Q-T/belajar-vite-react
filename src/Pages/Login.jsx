import {Form, Button,Container, Card} from "react-bootstrap";
import{useState} from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function login (){
    const navigate = useNavigate();
    const _initialForm = {
        email:"",
        password:"",
    };
    
    const[formdata,SetFormData] = useState(_initialForm)
    const [isLoading,setIsLoading] = useState(false);
    const handleChange = (e) =>{
        console.log(`input change ${e.target.name} = ${e.target.value} `)
        SetFormData ((prev) =>({
            ...prev, [e.target.name]:e.target.value,
        }))
    };

    const handleLogin = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() =>{
            setIsLoading(false);
            navigate('/Dashboard')

        },2000)
    }
    return(

        <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="w-100 d-flex align-items-center justify-content-center">
        <Card className="shadow" style={{width:"400px"}}>
            <Card.Body className="p-4">
            <h2 className="font-weight-bold text-center mb-4">Login Form</h2>
            <form action="" method="post">
                <div className="mb-3">
                    <Form.Group> 
                        <Form.Label>Email</Form.Label>
                            <Form.Control value= {formdata.email} onChange={handleChange} type="email"   name="email"required ></Form.Control>
                    </Form.Group>

                    <Form.Group> 
                        <Form.Label>Password</Form.Label>
                            <Form.Control value={formdata.password} onChange={handleChange} type="password" name="password"required ></Form.Control>
                    </Form.Group>
                </div>
                <Form.Group>
                    <Button onClick={handleLogin} variant="primary" type="submit" className="w-100">{isLoading ? "Loading..." : "Sign-in" }</Button>
                </Form.Group>
            </form>
            </Card.Body>
        </Card>
        </div>
        </Container>
    );
};