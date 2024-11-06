import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 3px solid #000000;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 15px;
  flex-shrink: 0;
`;

const TitleText = styled.div`
  color: black;
  font-size: 20px;
`

const Noti = styled.div`
  color: black;
  font-size: 20px;
`

const Time = styled.div`
  color: black;
  font-size: 20px;
`


function Header() {
  return(
    <HeaderDiv>
        <TitleText>TADS</TitleText>
        <Noti>알림아이콘</Noti>
        <Time>현재시각</Time>
    </HeaderDiv>
  );
}

export default Header;