import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import notiOff from '../assets/notiOff.png';
import notiOn from '../assets/notiOn.png';

const HeaderDiv = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 2px solid #000000;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-family: Pretendard;
  font-weight: 400;
  z-index: 1000;
  margin-top: 10px;
  padding-bottom: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1200px;
`;

const TitleText = styled.div`
  color: #0C70F2; 
  font-size: 35px;
  font-weight: 800;
  -webkit-text-stroke: 1px #000000; 
   margin-left: 50px
`;

const Noti = styled.div`
  color: black;
  font-size: 22px;
  margin-right: 10px;
`;

const Time = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
`;

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
                style={{ width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px', marginTop: '5px' }}
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
