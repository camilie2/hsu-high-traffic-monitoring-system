import React, { useState, useEffect } from 'react';

const TrafficData = () => {
  const [trafficData, setTrafficData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출
    fetch('https://z3qkytq58d.execute-api.ap-northeast-2.amazonaws.com/traffic-1-stage/traffic')
      .then((response) => response.json())
      .then((data) => {
        setTrafficData(data);
        setLoading(false);
        console.log(data)
      })
      .catch((err) => {
        setError('데이터를 가져오는 데 오류가 발생했습니다.');
        setLoading(false);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 호출

  if (loading) {
    return <div>로딩 중…</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Traffic Data</h1>
      <ul>
        <li><strong>CPU Usage:</strong> {trafficData.cpuUsage}%</li>
        <li><strong>Network In:</strong> {trafficData.networkIn} bytes</li>
        <li><strong>Network Out:</strong> {trafficData.networkOut} bytes</li>
      </ul>
    </div>
  );
};

export default TrafficData;