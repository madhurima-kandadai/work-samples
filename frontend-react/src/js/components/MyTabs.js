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

  onTimeChangeEvents(value) {
    if (value === 'hourly') {
      this.getHourlyEvents();
    }
    else {
      this.getDailyEvents();
    }
    console.log(value);
  }

  onTimeChangeStats(value) {
    if (value === 'hourly') {
      this.getHourlyStats();
    }
    else {
      this.getDailyStats();
    }
  }

  getDailyEvents() {
    EventsApi.getDailyEvents().then(dailyEvents => {
      console.log('Events Daily ');
      console.log(dailyEvents);
    });
  }

  getHourlyEvents() {
    EventsApi.getHourlyEvents().then(hourlyEvents => {
      console.log('Events Hourly ');
      console.log(hourlyEvents);
    });
  }
  getDailyStats() {
    StatsApi.getDailyStats().then(dailyStats => {
      console.log('Stats daily ');
      console.log(dailyStats);
    });
  }

  getHourlyStats() {
    StatsApi.getHourlyStats().then(hourlyStats => {
      console.log('Stats Hourly ');
      console.log(hourlyStats);
    });
  }

  render() {
    return (
      <Tabs onChange={this.onTabChange.bind(this)} defaultSelectedIndex={0}>
        <Tab value="events" label="Events" onActive={this.onActive}>
          <TimeFilter onChange={this.onTimeChangeEvents.bind(this)} />
          <EventsTable />
        </Tab>
        <Tab value="stats" label="Stats">
          <TimeFilter onChange={this.onTimeChangeStats.bind(this)} />
          <StatsTable />
        </Tab>
      </Tabs>
    );
  }
}