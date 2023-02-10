import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const GroupChart = ({optionData}) => {

  const LivePulseClientOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column'
    },
    title: {
        text: 'Browser market shares in March, 2022',
        align: 'left',
        style: {
            display: 'none'
        }
    },
    xAxis: {
        categories: optionData[0].categories
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Count medals',
            style: {
                display: 'none'
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },
    responsive: {
        rules: [{
          condition: {
            maxWidth: 100
          },
          chartOptions: {
            legend: {
              enabled: true
            }
          }
        }]
      },
   
      plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    credits: {
        enabled: false
      },
      series: [{
        name: optionData[0].label[0],
        data: optionData[0].lastMonths,
        color: optionData[0].colors[0]
    }, {
        name: optionData[0].label[1],
        data: optionData[0].currentMonths,
        color: optionData[0].colors[1]
    }]
  };

  
  return (
    <div>
    <HighchartsReact
           highcharts={Highcharts}
           options={LivePulseClientOptions}
       />
</div>
  )
}

export default GroupChart;
