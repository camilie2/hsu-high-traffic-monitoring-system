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
  text-align: center;

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

  & > li:second-child {
    color: #CA4646;
  }

  & + hr {
    margin: 10px 0;
  }
`;

const Alert = forwardRef((props, ref) => (
  <AlertContainer ref={ref}>
    <AlertList>
      <li>2024.11.17</li>
      <li>트래픽 경고</li>
      <li>20:21</li>
    </AlertList>
    <hr />
    <AlertList>
      <li>2024.11.16</li>
      <li>트래픽 경고</li>
      <li>16:05</li>
    </AlertList>
    <hr />
    <AlertList>
      <li>2024.11.16</li>
      <li>트래픽 경고</li>
      <li>14:48</li>
    </AlertList>
  </AlertContainer>
));

export default Alert;
