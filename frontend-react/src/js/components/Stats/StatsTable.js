import React from 'react';
import ReactDOM from 'react-dom';
import TimeFilter from '../TimeFilter';
import StatsRow from './StatsRow';
import StatsApi from '../../api/statsApi';

export default class StatsTable extends React.Component {

  constructor() {
    super();
    this.state = {
      statsData: [],
      selectedTime: 'daily'
    };
    this.getDailyStats(true);
  }

  onTimeChangeStats(value) {
    this.setState({ selectedTime: value });
    if (value === 'hourly') {
      this.getHourlyStats(true);
    }
    else {
      this.getDailyStats(true);
    }
  }
  getDailyStats(withRowCount) {
    StatsApi.getDailyStats(withRowCount).then(dailyStats => {      
      this.setState({ statsData: dailyStats.data });
    });
  }

  getHourlyStats(withRowCount) {
    StatsApi.getHourlyStats(withRowCount).then(hourlyStats => {
      debugger;
      this.setState({ statsData: hourlyStats.data });
    });
  }

  render() {
    var data = this.state.statsData;
    return (
      <div>
        <TimeFilter onChange={this.onTimeChangeStats.bind(this)} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              {this.state.selectedTime === 'hourly' ? <th>Hour</th> : null}
              <th>Impressions</th>
              <th>Click</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((result) => {
                return <StatsRow record={result} />
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}