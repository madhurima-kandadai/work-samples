import React from 'react';
import ReactDOM from 'react-dom';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';

export default class TimeFilter extends React.Component {
  state = {
    value: "daily"
  };

  onChange(ev) {
    this.props.onChange(ev.target.value);
    this.setState({ value: ev.target.value });
  }

  render() {
    return (
        <Select name="input" value={this.state.value} onChange={this.onChange.bind(this)} class="time-filter-select" >
          <Option value="hourly" label="Hourly" />
          <Option value="daily" label="Daily" />
        </Select>
    );
  }
}