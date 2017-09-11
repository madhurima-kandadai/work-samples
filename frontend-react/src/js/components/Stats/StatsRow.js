import React from 'react';
import ReactDOM from 'react-dom';

export default class StatsRow extends React.Component {
  render() {
    return (
        <tr>
            <td>Date </td>
            <td>Hour </td>
            <td>Impressions</td>
            <td>Click</td>
            <td>Revenue</td>
        </tr>
    );
  }
}