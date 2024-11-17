import React, { forwardRef } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: absolute;
  top: 60px;
  right: -40px;
  width: 230px;
  text-align: center;
  font-family: Pretendard;
  color: black;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  border: 1.5px solid #BBBBBB;
`;

const AlertList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;

  & > li {
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 50px;
    background-color: #EEEEEE;
    text-align: left;
  }

  & > li:first-child {
    font-weight: bold;
    text-align: center;
  }

  & + hr {
    margin: 10px 0;
  }
`;

const Alert = forwardRef((props, ref) => (
  <AlertContainer ref={ref}>
    <AlertList>
      <li>2024.01.01</li>
      <li>알림1</li>
      <li>00:00</li>
    </AlertList>
    <hr />
    <AlertList>
      <li>2024.01.02</li>
      <li>알림2</li>
      <li>00:00</li>
    </AlertList>
    <hr />
    <AlertList>
      <li>2024.01.03</li>
      <li>알림3</li>
      <li>00:00</li>
    </AlertList>
  </AlertContainer>
));

export default Alert;
