import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TrafficData = () => {
  const [trafficData, setTrafficData] = useState([]);
  const [recentAlerts, setRecentAlerts] = useState([]); // Recent alert messages
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch the traffic data and store it in localStorage
  const fetchData = () => {
    setLoading(true);
    fetch('https://z3qkytq58d.execute-api.ap-northeast-2.amazonaws.com/traffic-1-stage/traffic')
      .then((response) => response.json())
      .then((data) => {
        const parsedBody = JSON.parse(data.body);
        const timestamp = new Date().toLocaleTimeString();
        const trafficEntry = { ...parsedBody, timestamp };

        // Check if alarms are triggered and collect alert messages
        const alarmMessages = [];
        if (parsedBody.alarms.networkInAlarm) alarmMessages.push(parsedBody.alarmMessages[0]);
        if (parsedBody.alarms.networkOutAlarm) alarmMessages.push(parsedBody.alarmMessages[1]);
        if (parsedBody.alarms.cpuUsageAlarm) alarmMessages.push("CPU usage alarm triggered!");

        saveDataToLocalStorage(trafficEntry, alarmMessages);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Save data to localStorage
  const saveDataToLocalStorage = (data, alarmMessages) => {
    const currentData = JSON.parse(localStorage.getItem('trafficData')) || [];
    const updatedData = [...currentData, data].slice(-10); // Keep the last 10 entries
    localStorage.setItem('trafficData', JSON.stringify(updatedData));
    setTrafficData(updatedData);

    // Update the recent alerts if alarm messages are present
    if (alarmMessages.length > 0) {
      const updatedAlerts = alarmMessages.map((msg) => ({
        time: data.timestamp,
        message: msg,
        id: Date.now(),
      }));
      setRecentAlerts((prevAlerts) => [...updatedAlerts, ...prevAlerts].slice(0, 10));
    }
  };

  // Initialize traffic data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('trafficData'));
    if (storedData) {
      setTrafficData(storedData);
    }
  }, []);

  // Set up a 5-minute interval to fetch data
  useEffect(() => {
    const interval = setInterval(fetchData, 300000); // Fetch data every 5 minutes
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  // Generate chart data dynamically
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

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '20px' }}>
      {/* Alert box */}
      <div style={{ gridColumn: '1 / span 1', gridRow: '1 / span 1', textAlign: 'center', padding: '10px', border: '2px solid red', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3>경보창</h3>
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

      {/* CPU Usage chart */}
      <div style={{ gridColumn: '2 / span 1', gridRow: '1 / span 1', textAlign: 'center' }}>
        <h3>CPU Usage</h3>
        <Line data={generateChartData('cpuUsage', 'CPU Usage (%)')} options={chartOptions} />
      </div>

      {/* Network In chart */}
      <div style={{ gridColumn: '1 / span 1', gridRow: '2 / span 1', textAlign: 'center' }}>
        <h3>Network In</h3>
        <Line data={generateChartData('networkIn', 'Network In (bytes)')} options={chartOptions} />
      </div>

      {/* Network Out chart */}
      <div style={{ gridColumn: '2 / span 1', gridRow: '2 / span 1', textAlign: 'center' }}>
        <h3>Network Out</h3>
        <Line data={generateChartData('networkOut', 'Network Out (bytes)')} options={chartOptions} />
      </div>
    </div>
  );
};

export default TrafficData;