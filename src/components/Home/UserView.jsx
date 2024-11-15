import React from 'react';
import styled from 'styled-components';
import userIcon from '../../assets/userIcon.png'

const UserDiv = styled.div`
  width: 270px;
  height: 80px;
  border: 1.5px solid #BBBBBB;
  display: flex;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  gap: 20px;
`

const UserPic = styled.div`
  width: 60px;
  height: 60px;
  background-color: #959595;
  border-radius: 50%;
`

const TextBox = styled.div`
  align-items: center;
`

const UserName = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 16px;
`
const UserDesc = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 12px;
`

function UserView() {
    return(
      <UserDiv>
          <UserPic>
            <img
                  style={{ width: '60px', height: '60px'}}
                  src={userIcon}
                  alt="user"
            />
          </UserPic>
          <TextBox>
            <UserName>서비스 A
            </UserName>
            <UserDesc>환영합니다.</UserDesc>
          </TextBox>
          
      </UserDiv>
    );
  }
  
  export default UserView;