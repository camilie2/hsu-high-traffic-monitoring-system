import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #EEEEEE;
  align-items: flex-start;;
  flex-direction: column;
  font-size: 15px;
  flex-shrink: 0;
  display: flex;

  position : relative;
  transform : translateY(500%);

  padding-left: 250px;

  flex-wrap: wrap;
`;

const Text = styled.div`
  color: #959595;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 400;
`


function Footer() {
  return(
    <FooterDiv>
        <Text>2024 데이터통신</Text>
        <Text>SERVER 이상원 박상우 FRONTEND 김나은 장다연</Text>
    </FooterDiv>
  );
}

export default Footer;