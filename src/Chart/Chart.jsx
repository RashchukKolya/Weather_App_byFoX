import React from 'react';
import {Line} from 'react-chartjs-2';
import style from './Chart.css';


const Chart = ({dataChart}) => {
  // console.log('masiv',dataChart);
  
  const data = {
    labels: dataChart[0],
     datasets: [
            {
                label: " Morning",
                backgroundColor: `aqua`,
                fill: 'aqua',
                fontFamily: 'Yarta One, cursive',
                borderColor: `aqua`,
                data: dataChart[1],
                
              }, {
                label: 'Afternoon',
                backgroundColor: `yellowgreen`,
                fill: 'yellowgreen',
                fontFamily: 'Yarta One, cursive',
                borderColor: `yellowgreen`,
                data: dataChart[2],
                
              }, 
              {
                label: 'Evening',
                backgroundColor: `red`,
                fill: 'red',
                fontFamily: 'Yarta One, cursive',
                borderColor: `red`,
                data: dataChart[3],
                
              }, 
            ]
          }
    const options = {
        responsive: true,
        tooltips: {
          mode: 'index'
        },
        legend: {
          position:'top',
          display: true,
          labels: {
            fontColor: 'white',
            fontSize: 12, 
            fontFamily: 'Yarta One, cursive',
          }
        },
        title: {
          display: true,
          text: 'Temperature Chart',
          fontFamily: 'Yarta One, cursive',
          position:'top',
          fontColor: 'white',
          fontSize: 18, 
        },
        scales: {
          yAxes: [{
            scaleLabel: {
            fontFamily: 'Yarta One, cursive',
            display: true,
            labelString: 'Temperature, C',
            fontColor: 'white',
            fontSize: 18,
          },
          ticks: {
            fontFamily: 'Yarta One, cursive',
            fontColor: 'white',
            fontSize: 12
          },
          gridLines: {
            zeroLineColor: 'rgba(255,255,255,0.7)',
            zeroLineWidth: 2,
            color: 'rgba(255,255,255,0.5)'
          }
        }],
          xAxes: [{
            // scaleLabel: {
            //   fontFamily: 'Yarta One, cursive',
            //   display: true,
            //   labelString: 'Date of the Day',
            //   fontColor: 'white',
            //   fontSize: 20,
            // },
            ticks: {
              fontFamily: 'Yarta One, cursive',
              fontColor: 'white',
              fontSize: 12
        },
        gridLines: {
          color: 'rgba(255,255,255,0.5)',
          borderDash: [2, 5],
        }
      }]
        }
    }
  return (
    <div>
      <div className={style.chart}>
        <Line data={data} options={options}/>
      </div>
    </div>
  );
};

export default Chart;