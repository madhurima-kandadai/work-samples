import React from 'react';
import ReactDOM from 'react-dom';
import TimeFilter from '../TimeFilter';
import EventsRow from './EventsRow';
import EventsApi from '../../api/eventsApi';
import Pagination from 'react-js-pagination';

export default class EventsTable extends React.Component {
  constructor() {
    super()
    this.state = {
      eventsData: [],
      selectedTime: 'daily',
      activePage: 1,
      limit: 15,
      totalRows: 0
    };
    this.getDailyEvents(true);
  }

  onTimeChangeEvents(value) {
    this.setState({ selectedTime: value }, () => console.log(this.state.selectedTime));
    this.CallEvents(true);
  }

  CallEvents(withRowCount) {    
    if (this.state.selectedTime == 'hourly') {
      this.getHourlyEvents(withRowCount);
    }
    else {
      this.getDailyEvents(withRowCount);
    }
  }

  getDailyEvents(withRowCount) {
    EventsApi.getDailyEvents(withRowCount, this.state.activePage, this.state.limit)
      .then(dailyEvents => {
        if (dailyEvents.rowCount) {
          this.setState({ totalRows: dailyEvents.rowCount }, () => console.log(this.state.totalRows));
        }
        this.setState({ eventsData: dailyEvents.data }, () => console.log(this.state.dailyEvents));
      });
  }

  getHourlyEvents(withRowCount) {
    EventsApi.getHourlyEvents(withRowCount, this.state.activePage, this.state.limit)
      .then(hourlyEvents => {
        if (hourlyEvents.rowCount) {
          this.setState({ totalRows: hourlyEvents.rowCount }, () => console.log(this.state.totalRows));
        }
        this.setState({ eventsData: hourlyEvents.data }, () => console.log(this.state.eventsData));
      });
  }

  handlePageChange(pageNumber) {    
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber }, () => console.log(this.state.activePage));
    this.CallEvents(false);
  }

  render() {
    var data = this.state.eventsData;
    return (
      <div>
        <TimeFilter onChange={this.onTimeChangeEvents.bind(this)} />
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                {this.state.selectedTime === 'hourly' ? <th>Hour</th> : null}
                <th>Events</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((result) => {
                  return <EventsRow record={result} />
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