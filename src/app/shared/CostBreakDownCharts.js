import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CostBreakDownCharts = ({parentWidth, parentHeight, optionData, align, verticalAlign, layout}) => {
  const LivePulseClientOptions = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
         width: `${parentWidth}`,
         height: `${parentHeight}`
    },
    title: {
        text: 'Browser market shares in March, 2022',
        align: 'left',
        style: {
            display: 'none'
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
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    legend: {
        align: `${align}`,
        verticalAlign: `${verticalAlign}`,
        layout: `${layout}`,
        x: 0,
        y: 0
      },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    credits: {
        enabled: false
      },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            [optionData[0].label[0], optionData[0].data[0]],
            [optionData[0].label[1], optionData[0].data[1]]                
    ],
    colors: [
      optionData[0].colors[0], optionData[0].colors[1]
    ]
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

export default CostBreakDownCharts;
