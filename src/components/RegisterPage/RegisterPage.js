import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
const RegisterPage = () => {
    let history = useHistory();
    return (
        <>
            <Container>
                <h1 className="shadow-sm bg-danger text-white mt-5 p-3 text-center ">REGISTRATION FORM</h1>
                <Row className="mt-5">
                    <Col lg={10} md={5} sm={12} className="p-1 m-auto shadow-sm rounded-lg bg-danger text-white">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>FirstName</b></Form.Label>
                                <Form.Control type="name" placeholder="first name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>LastName</b></Form.Label>
                                <Form.Control type="name" placeholder="last name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>Email</b></Form.Label>
                                <Form.Control type="email" placeholder="email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-white"><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                
                            </Form.Group>
                            <Button type="button" class="btn btn-dark " type="submit">
                                <b>Sign up</b>
                            </Button>
                            <a className="text-white" onClick={()=>{history.push('/login');}}>Already Have An Account? Login</a>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
};

export default RegisterPage;