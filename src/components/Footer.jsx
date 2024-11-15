import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  font-size: 12px; 
  font-family: Pretendard;
  font-weight: 400;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-left: 30px;
  padding-top: 15px;
  box-sizing: border-box;
`;

const Text = styled.div`
  color: #959595;
  font-size: 16px;
  margin-top: 5px; 
`;

function Footer() {
  return(
    <FooterDiv>
        <Text>2024 데이터통신</Text>
        <Text>SERVER 이상원 박상우 FRONTEND 김나은 장다연</Text>
    </FooterDiv>
  );
}

export default Footer;
