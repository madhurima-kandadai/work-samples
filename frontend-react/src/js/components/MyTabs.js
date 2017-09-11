import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import EventsTable from './Events/EventsTable';
import StatsTable from './Stats/StatsTable'
import TimeFilter from './TimeFilter';

import StatsApi from '../api/statsApi';
import EventsApi from '../api/eventsApi';

export default class MyTabs extends React.Component {

  onTabChange(i, value) {
    console.log(value);
  }

  render() {
    return (
      <Tabs onChange={this.onTabChange.bind(this)} defaultSelectedIndex={0}>
        <Tab value="events" label="Events" onActive={this.onActive}>          
          <EventsTable />
        </Tab>
        <Tab value="stats" label="Stats">          
          <StatsTable />
        </Tab>
      </Tabs>
    );
  }
}