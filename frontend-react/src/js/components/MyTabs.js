import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';

import EventsTable from './Events/EventsTable';
import TimeFilter from './TimeFilter';

export default class MyTabs extends React.Component {
  onTabChange(i, value) {
    console.log(value);
  }

  onTimeChange(value) {
    console.log(value);
  }

  render() {
    return (
      <Tabs onChange={this.onTabChange.bind(this)} defaultSelectedIndex={0}>
        <Tab value="events" label="Events" onActive={this.onActive}>
          <TimeFilter onChange={this.onTimeChange.bind(this)} />
          <EventsTable/>
        </Tab>
        <Tab value="stats" label="Stats">
          Pane-2
        </Tab>
      </Tabs>
    );
  }
}