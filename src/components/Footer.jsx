import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  font-size: 10px; 
  font-family: Pretendard;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
  padding-top: 10px; /* 패딩을 줄였습니다 */
`;

const Text = styled.div`
  color: #959595;
  font-size: 14px; /* 폰트 크기를 줄였습니다 */
  margin-top: 3px; /* 간격을 줄였습니다 */
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
