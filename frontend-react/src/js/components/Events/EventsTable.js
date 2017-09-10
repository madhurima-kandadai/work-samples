import React from 'react';
import ReactDOM from 'react-dom';

import EventsRow from './EventsRow';

export default class EventsTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
            <tr>
                <th>Events</th>
                <th>Hour</th>
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