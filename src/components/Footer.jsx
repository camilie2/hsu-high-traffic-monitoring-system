import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 40vh; 
  width: 100%; 
  display: flex;
  flex-direction: column;
`;

const FooterDiv = styled.div`
  width: 100vw;
  height: 150px;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  font-size: 12px; 
  font-family: Pretendard;
  font-weight: 400;
  padding-left: 130px;
  padding-top: 15px;
  box-sizing: border-box;
  margin-top: auto; /* 푸터를 하단에 고정 */
`;

const Text = styled.div`
  color: #959595;
  font-size: 16px;
  margin-top: 5px; 
`;

function Footer() {
  return (
    <Container>
      <FooterDiv>
        <Text>2024 데이터통신</Text>
        <Text>SERVER 이상원 박상우 FRONTEND 김나은 장다연</Text>
      </FooterDiv>
    </Container>
  );
}

export default Footer;
