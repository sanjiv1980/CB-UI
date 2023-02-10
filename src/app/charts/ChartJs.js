import React, { Component } from 'react';
import CostBreakDownCharts from '../shared/CostBreakDownCharts';
import GroupChart from '../shared/GroupedChart';
export class ChartJs extends Component {
  constructor(props){
    super(props);
    this.state = {
        width: 400,
        height: 300,
        layout: 'horizontal', 
        verticalAlign: 'bottom', 
        align:'center'
    }
}
areaData3 = [
  {
    label: ["Last Months", "Current Months"],
    lastMonths:[50, 75, 78],
    currentMonths:[45, 65, 80],
    colors: ['#334FFF', '#FF5233'],
    categories:['2021', '2022', '2023']
  }
]

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
                    <h3 className="page-title">
                        Chart-js
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Chart-js</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Line Chart</h4>
                                <GroupChart optionData={this.areaData3} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bar Chart</h4>
                                <CostBreakDownCharts parentWidth={width} parentHeight={height} optionData={this.areaData2}
                                layout={layout} verticalAlign={verticalAlign} align={align} />
                            </div>
                        </div>
                    </div>
                </div>
              
              
            </div>
        )
    }
}

export default ChartJs
