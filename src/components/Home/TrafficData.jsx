import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TrafficData = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recentAlerts, setRecentAlerts] = useState([]); // 최근 알람 메시지 상태

  const fetchData = () => {
    fetch('https://z3qkytq58d.execute-api.ap-northeast-2.amazonaws.com/traffic-1-stage/traffic')
      .then((response) => response.json())
      .then((data) => {
        const parsedBody = JSON.parse(data.body);
        const timestamp = new Date().toLocaleTimeString();
        const trafficEntry = { ...parsedBody, timestamp };

        const alarmMessages = [];
        if (parsedBody.alarms.networkInAlarm) alarmMessages.push(parsedBody.alarmMessages[0]);
        if (parsedBody.alarms.networkOutAlarm) alarmMessages.push(parsedBody.alarmMessages[1]);
        if (parsedBody.alarms.cpuUsageAlarm) alarmMessages.push("CPU 사용률이 위험 수치를 초과했습니다!");

        saveDataToLocalStorage(trafficEntry, alarmMessages);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  };

  const saveDataToLocalStorage = (data, alarmMessages) => {
    const currentData = JSON.parse(localStorage.getItem('trafficData')) || [];
    const updatedData = [...currentData, data].slice(-10);
    localStorage.setItem('trafficData', JSON.stringify(updatedData));
    setTrafficData(updatedData);

    setRecentAlerts((prevAlerts) => {
      const updatedAlerts = alarmMessages.length > 0
        ? [{ time: data.timestamp, message: alarmMessages.join(' '), id: Date.now() }, ...prevAlerts].slice(0, 10)
        : prevAlerts;
      return updatedAlerts;
    });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); 
    return () => clearInterval(interval); 
  }, []);

  const generateChartData = (dataKey, label) => ({
    labels: trafficData.map((entry) => entry.timestamp),
    datasets: [
      {
        label: label,
        data: trafficData.map((entry) => entry[dataKey]),
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  const [value, onChange] = useState(new Date());

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px',  maxWidth: '1200px', maxHeight: '800px' }}>
      <div style={{ gridColumn: '1 / span 1', gridRow: '1 / span 1', textAlign: 'center', padding: '100px'}}>
        <h3>경고창</h3>
        <div style={{ marginTop: '20px', color: 'gray' }}>
          {recentAlerts.length === 0 ? "현재 경고가 없습니다." : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {recentAlerts.map((alert) => (
                <li key={alert.id} style={{ marginBottom: '10px', color: 'red', fontWeight: 'bold' }}>
                  [{alert.time}] {alert.message}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div style={{ gridColumn: '2 / span 1', gridRow: '1 / span 1', textAlign: 'center', maxWidth: '550px', maxHeight: '350px', margin: '0 auto'}}>
        <h3>달력 보기</h3>
        <Calendar></Calendar>
        {/* <Line data={generateChartData('cpuUsage', 'CPU Usage (%)')} options={chartOptions} /> */}
      </div>
      <div style={{ gridColumn: '1 / span 1', gridRow: '2 / span 1', textAlign: 'center',  maxWidth: '550px', maxHeight: '350px'}}>
        <h3>Network In</h3>
        <Line data={generateChartData('networkIn', 'Network In (bytes)')} options={chartOptions} />
      </div>
      <div style={{ gridColumn: '2 / span 1', gridRow: '2 / span 1', textAlign: 'center',  maxWidth: '550px', maxHeight: '350px' }}>
        <h3>Network Out</h3>
        <Line data={generateChartData('networkOut', 'Network Out (bytes)')} options={chartOptions} />
      </div>
    </div>
  );
};

export default TrafficData;