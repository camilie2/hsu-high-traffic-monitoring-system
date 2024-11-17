import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import notiOff from '../assets/notiOff.png';
import notiOn from '../assets/notiOn.png';
import Alert from './Alert.jsx';

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
  padding-top: 5px;
  padding-bottom: 10px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1150px; 
  //margin-left: 1200px;
  //position: relative;
`;

const TitleText = styled.div`
  color: #0C70F2; 
  font-size: 35px;
  font-weight: 800;
  -webkit-text-stroke: 1px #000000; 
  margin-left: 50px;
,`;

const Noti = styled.div`
  color: black;
  font-size: 22px;
  margin-right: 10px;
  position: relative;
`;

const Time = styled.div`
  color: black;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  margin-right: 80px; 
`;

const DropDown = styled.div`
  background-color: white;
  border: 1.5px solid #BBBBBB;
  position: absolute;
  top: 30px;  /* 아이콘 바로 아래로 위치 */
  right: 0;
  width: 230px;
  padding: 10px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 99;
  border-radius: 8px;
  `


  function Header() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [imageClicked, setImageClicked] = useState(false);
    const [alert, setAlert] = useState(false);
    const dropdownRef = useRef(null);
    
    useEffect(() => {
      const handleOutsideClick = (event) => {
        // 드롭다운 외부 클릭 감지
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setAlert(false); // 드롭다운 닫기
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick); // 클릭 이벤트 추가
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick); // 이벤트 제거
      };
    }, []);
  
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
                  onClick={() => { setAlert((prev) => !prev); }}
              />
              {alert && <Alert ref={dropdownRef} />}
            </Noti>
            <Time>{ChangeDate}</Time>
          </MenuContainer>
      </HeaderDiv>
    );
  }
  
  export default Header;