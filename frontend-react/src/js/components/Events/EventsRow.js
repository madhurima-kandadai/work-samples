import React from 'react';
import ReactDOM from 'react-dom';

export default class EventsRow extends React.Component {
  render() {
    var record = this.props.record;
    var date = new Date(record.date);
    return (
      <tr>
        <td>{date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}</td>
        {record.hour ? <td>{record.hour}</td> : null}
        <td>{record.events}</td>
      </tr>
    );
  }
}