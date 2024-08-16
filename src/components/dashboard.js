import React from 'react';
import './dashboard.css';
import Navbar from './Navbar';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
 
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales (x150)',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(128,128,128)',
      },
    ],
  };

  
  const lineData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Sales (in weeks)',
        data: [165, 259, 180, 181, 156],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

 
  const pieData = {
    labels: ['Vitamin C', 'Paracetamol', 'Digestive Aid', 'Aspirin'],
    datasets: [
      {
        label: 'Medicine (Sold most)',
        data: [300, 50, 100, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(128,128,128)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  
  const doughnutData = {
    labels: ['Jan', 'Feb', 'March','April'],
    datasets: [
      {
        label: 'Goal Status',
        data: [150, 200, 50],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  
  const pieOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Workout Types',
      },
    },
  };

  
  const doughnutOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Goal Status',
      },
    },
  };

  return (
    <div>
      <Navbar/>
      <div className="dashboard-layout">
        <div className="dashboard-container">
          <div className="card-container">
            <div className="card" id="total-duration">
              <h3>Visitors</h3>
              <p>1232</p>
            </div>
            <div className="card" id="total-workouts">
              <h3>Sales</h3>
              <p>$2498</p>
            </div>
            <div className="card" id="goals-achieved">
              <h3>Subscribers</h3>
              <p>1425</p>
            </div>
            <div className="card" id="calories-burned">
              <h3>Orders</h3>
              <p>734</p>
            </div>
          </div>
          <div className="charts-container">
            <div className="chart">
              <Bar data={barData} />
            </div>
            <div className="chart">
              <Line data={lineData} />
            </div>
          </div>
          <div className="charts-container">
            <div className="chart">
              <Pie data={pieData} options={pieOptions} />
            </div>
            <div className="chart">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;