import React from 'react';
import ReactDOM from 'react-dom';

import EventsRow from './EventsRow';

export default class EventsTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
            <tr>                
                <th>Date</th>
                <th>Hour</th>
                <th>Events</th>
            </tr>
        </thead>
        <tbody>
            <EventsRow/>
            <EventsRow/>
            <EventsRow/>
        </tbody>
      </table>

    );
  }
}