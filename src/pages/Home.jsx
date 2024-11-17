import React from 'react';
import UserView from '../components/Home/UserView';
import View1 from '../components/Home/TrafficData';
import styled from 'styled-components';

const BG = styled.div`
  background-color: white;
  width: 100%;
  /*padding: 60px 250px;*/
  padding: 30px 150px 0px 150px;
  margin: 0 auto;
`;

const TopBox = styled.div`
  padding-left: 0;
`

function Home() {
  return(
    <BG>
      <TopBox>
        <UserView></UserView>
      </TopBox>
      
      <View1></View1>
    </BG>
    

  );
}

export default Home;