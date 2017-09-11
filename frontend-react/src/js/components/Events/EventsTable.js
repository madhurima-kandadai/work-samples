import React from 'react';
import ReactDOM from 'react-dom';
import TimeFilter from '../TimeFilter';
import EventsRow from './EventsRow';
import EventsApi from '../../api/eventsApi';
export default class EventsTable extends React.Component {
  constructor() {
    super()
    this.state = {
      eventsData: [],
      selectedTime: 'daily'
    };
    this.getDailyEvents(true);
  }

  onTimeChangeEvents(value) {
    if (value === 'hourly') {
      this.getHourlyEvents(false);
    }
    else {
      this.getDailyEvents(false);
    }
    this.setState({ selectedTime: value });
  }

  getDailyEvents(withRowCount) {
    EventsApi.getDailyEvents(withRowCount).then(dailyEvents => {
      debugger;
      this.setState({ eventsData: dailyEvents.data });
    });
  }

  getHourlyEvents(withRowCount) {
    EventsApi.getHourlyEvents(withRowCount).then(hourlyEvents => {
      debugger;
      this.setState({ eventsData: hourlyEvents.data });
    });
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
      </div>
    );
  }
}