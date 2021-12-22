import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
const LoginPage = () => {
    let history = useHistory();
    return (
        <>
            <Container>
                <h1 className="shadow-sm bg-danger text-white mt-4 p-3 text-center ">LOGIN</h1>
                <Row className="mt-5">
                    <Col lg={8} md={4} sm={12} className="p-3 m-auto shadow-sm rounded-lg bg-danger text-white">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className="text-white"><b>Email address</b></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="text-white"><b>Password</b></Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button onClick={()=>{history.push('/index');}} type="button" class="btn btn-dark" type="submit">
                                <b>Login</b>
                            </Button><br/>
                            <a className="text-white" onClick={()=>{history.push('/RegisterPage');}}>Don't have an Account? Register</a>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
};

export default LoginPage;