import React from 'react';
import styled from 'styled-components';
import variables from '../../../../styles/variables';

function Nav() {
  return (
    <NavContainer>
      <Title>CLASS IOI +</Title>
      <Icon src="https://cdn-icons-png.flaticon.com/512/709/709424.png" />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  padding-left: 20px;
  padding-right: 30px;
  background-color: black;
  color: white;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

const Icon = styled.img`
  padding: 5px;
  height: 60%;
  background-color: #feb601;
  border-radius: 45%;
`;

export default Nav;
