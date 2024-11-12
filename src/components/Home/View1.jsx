import React, { useEffect, useState } from 'react';
import { getTraffic } from '../../api/getTraffic';
import styled from 'styled-components';

const TableDiv = styled.div`
    width = 300px;
    height = 200px;
`

const view1 = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getTraffic();
          // JSON 형식을 JavaScript 객체로 변환
          const parsedData = JSON.parse(result.body);
          setData(parsedData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
  
    return (
      <TableDiv>
        <h1>API 데이터 출력</h1>
        <p>CPU Usage: {data.cpuUsage}%</p>
        <p>Network In: {data.networkIn} bytes</p>
        <p>Network Out: {data.networkOut} bytes</p>
      </TableDiv>
    );
  };
export default view1;