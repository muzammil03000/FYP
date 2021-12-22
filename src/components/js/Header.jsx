import React from 'react';
import styled from 'styled-components';
import './new.css';
import {useHistory} from 'react-router-dom';
const Navbar = styled.header`
  background: #0c002b;
  color: white;
  overflow: auto;
  padding: 20px 15px;
`;

const Header = () => (
  <Navbar>
    <div className="logo">Real Estate</div>
    <nav>
      
      <a href="/index">About Us</a>
      <a href="../Login" >Login</a>
      <a href="../RegisterPage" className="register-btn">
        Register
      </a>
    </nav>
  </Navbar>
);

export default Header;
