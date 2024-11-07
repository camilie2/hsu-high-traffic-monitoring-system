import React from 'react';
import UserView from '../components/Home/UserView';
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
    </BG>
    

  );
}

export default Home;