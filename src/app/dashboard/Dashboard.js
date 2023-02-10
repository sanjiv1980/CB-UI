import React, { Component } from 'react';
import Progressbar from '../shared/Progressbar';
import {Line } from 'react-chartjs-2';
import CostBreakDownCharts from '../shared/CostBreakDownCharts';
export class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
        width: 300,
        height: 150,
        align:'left',
        verticalAlign:'top',
        layout:'vertical'
    }
}

  transactionHistoryData = {
    labels: ["Paypal", "Stripe", "Cash"],
    datasets: [{
      data: [55, 25, 20],
      backgroundColor: [
        "#111111", "#00d25b", "#ffab00"
      ]
    }
    ]
  };

  transactionHistoryOptions = {
    responsive: true,
    maintainAspectRatio: true,
    segmentShowStroke: false,
    cutoutPercentage: 70,
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true
    }
  }

  sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  /// liner chart
  areaData = {
    labels: ["2013", "2014", "2015", "2016", "2017"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      fill: true, // 3: no fill
    }]
};


areaOptions = {
    plugins: {
      filler: {
        propagate: true
      }
    },
    scales: {
      yAxes: [{
        gridLines: {
          color: "rgba(204, 204, 204,0.1)"
        }
      }],
      xAxes: [{
        gridLines: {
          color: "rgba(204, 204, 204,0.1)"
        }
      }]
    }
}

areaData2 = [
  {
    label: ["Last Months", "Current Months"],
    data: [50, 75],
    colors: ['#334FFF', '#FF5233']
  }
]


  render() {
    const {width, height, layout, verticalAlign, align} = this.state;
    return (
      <div>
        <div className="page-header">
          <div>
            <h3 className="page-title">
              Welcome To Dashboard
            </h3>
          </div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
          </nav>
        </div>
        {/* couter */}
        <div className="row">
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <p className='mb-1 tx-inverse'>Number Of Sales</p>
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">$12.34</h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success ">
                      <span className="mdi mdi-chart-line icon-item"></span>
                    </div>
                  </div>
                </div>
                <div class="mb-1">
                  <Progressbar bgcolor="#5b1166" progress='85' height={6} />
                </div>
                <h6 className="font-weight-normal tx-inverse">Potential growth</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <p className='mb-1 tx-inverse'>New Revenue</p>
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">$17.34</h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success">
                      <span className="mdi mdi-chart-pie icon-item"></span>
                    </div>
                  </div>
                </div>
                <div class="mb-1">
                  <Progressbar bgcolor="#eb6f33" progress='60' height={6} />
                </div>
                <h6 className="font-weight-normal tx-inverse">Revenue current</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <p className='mb-1 tx-inverse'>Total Cost</p>
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">$12.34</h3>
                      <p className="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success">
                      <span className="mdi mdi-currency-usd icon-item"></span>
                    </div>
                  </div>
                </div>
                <div class="mb-1">
                  <Progressbar bgcolor="#28a745" progress='58' height={6} />
                </div>
                <h6 className="font-weight-normal tx-inverse">Daily Income</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-9">
                    <p className='mb-1 tx-inverse'>Profit By Sale</p>
                    <div className="d-flex align-items-center align-self-start">
                      <h3 className="mb-0">$31.53</h3>
                      <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="icon icon-box-success ">
                      <span className="mdi mdi-chart-bar icon-item"></span>
                    </div>
                  </div>
                </div>
                <div class="mb-1">
                  <Progressbar bgcolor="#28a745" progress='75' height={6} />
                </div>
                <h6 className="font-weight-normal tx-inverse">Expense current</h6>
              </div>
            </div>
          </div>
        </div>
        {/* couter end */}
        {/* monthly graph */}
        <div>
          <div className='row'>
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title tx-inverse">Overview of Sales</h4>
                  <Line data={this.areaData} options={this.areaOptions} />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
              <div class="card card_set_height mb-2">
                <div class="card-body">
                    <div> 
                      <h6 class="card-title mb-1">Cost BreakDown</h6>
                      </div>
                    <h3 className='card-profits cost-nuber'><span>$</span>22,534</h3>
                    <div className='text-muted'>
                      <CostBreakDownCharts parentWidth={width} parentHeight={height} optionData={this.areaData2}
                      layout={layout} verticalAlign={verticalAlign} align={align} />
                    </div>
                  
                </div>
              </div>
              <div class="card card_set_height">
                <div class="card-body">
                    <div> 
                      <h6 class="card-title mb-1">Monthly Profits</h6> 
                      <p class="text-muted card-sub-title">Excepteur sint occaecat cupidatat non proident. </p>
                    </div>
                    <h3 className='card-profits'><span>$</span>22,534</h3>
                    <div className='text-muted'>
                      This Month
                    </div>
                    <div class="mb-1">
                      <Progressbar bgcolor="#8760fb" progress='75' height={6} />
                    </div>
                    <div className='text-muted'>
                      Last Month
                    </div>
                    <div class="mb-1">
                      <Progressbar bgcolor="#28a745" progress='50' height={6} />
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Dashboard;