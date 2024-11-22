import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background-color: #ffffff;
  font-family: Pretendard;
`;

const Title = styled.h1`
  font-size: 32px;
  color: black;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: gray;
  margin: 10px 0 40px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #333333;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555555;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

function Start() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <Container>
      <Title>대규모 트래픽 이상 감지 시스템: TADS</Title>
      <Subtitle>실시간 서버 모니터링 및 알림</Subtitle>
      <Button onClick={handleClick}>시작하기</Button>
    </Container>
  );
};
  
  export default Start;