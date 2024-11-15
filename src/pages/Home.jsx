import React from 'react';
import UserView from '../components/Home/UserView';
import View1 from '../components/Home/TraffixData';
import styled from 'styled-components';

const BG = styled.div`
  background-color: white;
  width: 100%;
  padding: 60px 250px;
`;

function Home() {
  return(
    <BG>
      <UserView></UserView>
      <View1></View1>
    </BG>
    

  );
}

export default Home;