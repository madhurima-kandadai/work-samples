import React from 'react';
import ReactDOM from 'react-dom';
import TimeFilter from '../TimeFilter';
import StatsRow from './StatsRow';
import StatsApi from '../../api/statsApi';
import Pagination from 'react-js-pagination';

export default class StatsTable extends React.Component {

  constructor() {
    super();
    this.state = {
      statsData: [],
      selectedTime: 'daily',
      activePage: 1,
      limit: 15,
      totalRows: 0
    };
    this.getDailyStats(true);
  }

  onTimeChangeStats(value) {
    this.setState(
      {
        selectedTime: value,
        activePage: 1
      }, () => {
        this.CallStats(true);
      });
  }

  CallStats(withRowCount) {
    if (this.state.selectedTime == 'hourly') {
      this.getHourlyStats(withRowCount);
    }
    else {
      this.getDailyStats(withRowCount);
    }
  }

  getDailyStats(withRowCount) {
    StatsApi.getDailyStats(withRowCount, this.state.activePage, this.state.limit)
      .then(dailyStats => {
        if (dailyStats.rowCount) {
          this.setState({ totalRows: dailyStats.rowCount }, () => console.log(this.state.totalRows));
        }
        this.setState({ statsData: dailyStats.data }, () => console.log(this.state.totalRows));
      });
  }

  getHourlyStats(withRowCount) {
    StatsApi.getHourlyStats(withRowCount, this.state.activePage, this.state.limit)
      .then(hourlyStats => {
        if (hourlyStats.rowCount) {
          this.setState({ totalRows: hourlyStats.rowCount }, () => console.log(this.state.totalRows));
        }
        this.setState({ statsData: hourlyStats.data }, () => console.log(this.state.totalRows));
      });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber }, () => {
      this.CallStats(false);
    });
  }

  render() {
    var data = this.state.statsData;
    return (
      <div>
        <TimeFilter onChange={this.onTimeChangeStats.bind(this)} />
        <div>
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
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.limit}
          totalItemsCount={this.state.totalRows}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}