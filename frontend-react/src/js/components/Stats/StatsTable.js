import React from 'react';
import ReactDOM from 'react-dom';

import StatsRow from './StatsRow';

export default class StatsTable extends React.Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
            <tr>
                <th>Date</th>
                <th>Hour</th>
                <th>Impressions</th>
                <th>Click</th>
                <th>Revenue</th>                
            </tr>
        </thead>
        <tbody>
            <StatsRow/>
            <StatsRow/>
            <StatsRow/>
        </tbody>
      </table>

    );
  }
}