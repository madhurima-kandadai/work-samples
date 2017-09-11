import React from 'react';
import ReactDOM from 'react-dom';

export default class EventsRow extends React.Component {
  render() {
    return (
        <tr>            
            <td>Date</td>
            <td>Hour </td>
            <td>Event </td>
        </tr>
    );
  }
}