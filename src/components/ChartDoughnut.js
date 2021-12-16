import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

const ChartDoughnut = ()=>{
  useEffect(() => {
    let config = {
      type: 'doughnut',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
        ],
        datasets: [
          {
            label: 'My first Dataset',
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            data: [300, 50, 100],
            hoverOffset: 4,
          }
        ],
      },
      options: {
      },
    };
    let ctx = document.getElementById('doughnut-chart').getContext('2d');
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
      <Card>
          <CardHeader color="pink" contentPosition="left">
              <h6 className="uppercase text-gray-200 text-xs font-medium">
                  Overview
              </h6>
              <h2 className="text-white text-2xl">Sales value</h2>
          </CardHeader>
          <CardBody>
              <div className="relative h-96">
                  <canvas id="doughnut-chart"></canvas>
              </div>
          </CardBody>
      </Card>
  );
}

export default ChartDoughnut;