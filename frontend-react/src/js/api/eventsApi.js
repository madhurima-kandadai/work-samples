import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class EventsApi extends React.Component {

    static getDailyEvents() {        
        return fetch(config.apiUrl + '/events/daily', { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyEvents() {
        return fetch(config.apiUrl + '/events/hourly', { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}