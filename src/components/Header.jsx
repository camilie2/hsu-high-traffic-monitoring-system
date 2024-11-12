import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import notiOff from '../assets/notiOff.png';
import notiOn from '../assets/notiOn.png';

const HeaderDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 45px;
  border-bottom: 3px solid #000000;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  font-size: 15px;
  flex-shrink: 0;
  padding: 0px 250px;
  position: fixed;
  top: 0;
  font-family: Pretendard;
  font-weight: 400;
`;

const MenuContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  margin-left: auto;
  float: right;
`

const TitleText = styled.div`
  color: black;
  font-size: 28px;
  float: left;
  font-weight: 700;
`

const Noti = styled.div`
  color: black;
  font-size: 20px;
  float: left;
`

const Time = styled.div`
  color: black;
  font-size: 20px;
  margin-left: auto;
`


function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [imageClicked, setImageClicked] = useState(false);

  useEffect(() => {
    // 1초마다 currentDate 업데이트
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ChangeDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  const handleImageClick = () => {
    setImageClicked((prev) => !prev);
  };

  return(
    <HeaderDiv>
        <TitleText>TADS</TitleText>
        <MenuContainer>
          <Noti>
            <img
                style={{ width: '25px', height: '25px', cursor: 'pointer', marginRight: '10px', marginTop: '10px' }}
                src={imageClicked ? notiOn : notiOff}
                alt="noti"
                onClick={handleImageClick}
            />
          </Noti>
          <Time>{ChangeDate}</Time>
        </MenuContainer>
        
    </HeaderDiv>
  );
}

export default Header;