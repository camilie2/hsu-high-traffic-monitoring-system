import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  position: absolute;
  top: 60px;
  right: -40px;
  width: 230px;
  font-size: 20px;
  text-align: center;
  font-family: Pretendard;
  color: black;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  border: 1.5px solid #BBBBBB;
`;

const AlertList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
  text-align: center;

  & > li {
    margin: 5px 10px;
    padding: 5px 10px;
    border-radius: 50px;
    background-color: #EEEEEE;
    text-align: left;
  }

  & > li:first-child {
    font-weight: bold;
    text-align: center;
  }

  & > li:second-child {
    color: #CA4646;
  }

  & + hr {
    margin: 10px 0;
  }
`;

const Alert = forwardRef((props, ref) => {
  const [recentAlerts, setRecentAlerts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://z3qkytq58d.execute-api.ap-northeast-2.amazonaws.com/traffic-1-stage/traffic')
        .then((response) => response.json())
        .then((data) => {
          const parsedBody = JSON.parse(data.body);
          const timestamp = new Date().toLocaleTimeString();
          const alarmMessages = [];

          if (parsedBody.alarms.networkInAlarm) alarmMessages.push(parsedBody.alarmMessages[0]);
          if (parsedBody.alarms.networkOutAlarm) alarmMessages.push(parsedBody.alarmMessages[1]);
          if (parsedBody.alarms.cpuUsageAlarm) alarmMessages.push("CPU 사용률이 위험 수치를 초과했습니다!");

          setRecentAlerts((prevAlerts) => [
            ...[{ time: timestamp, message: alarmMessages.join(' '), id: Date.now() }],
            ...prevAlerts,
          ].slice(0, 10));
        })
        .catch((err) => {
          setError('경고 없음');
          console.error(err);
        });
    };

    fetchData();
  }, []); // 빈 배열로 useEffect는 한 번만 실행

  return (
    <AlertContainer ref={ref}>
      <AlertList>
        {recentAlerts.length === 0 ? (
          <li>현재 경고가 없습니다.</li>
        ) : (
          recentAlerts.map((alert) => (
            <li key={alert.id}>
              [{alert.time}] {alert.message}
            </li>
          ))
        )}
      </AlertList>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </AlertContainer>
  );
});

export default Alert;
