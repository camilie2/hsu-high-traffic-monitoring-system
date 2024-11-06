import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center; 
  font-size: 15px;
  flex-shrink: 0;

  position : relative;
  transform : translateY(500%);
`;

const Text = styled.div`
  color: #959595;
  font-size: 20px;
`


function Footer() {
  return(
    <FooterDiv>
        <Text>푸터 내용 작성</Text>
    </FooterDiv>
  );
}

export default Footer;