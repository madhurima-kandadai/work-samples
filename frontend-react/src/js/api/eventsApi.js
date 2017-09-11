import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class EventsApi  {

    static getDailyEvents(withRowCount) {        
        return fetch(config.apiUrl + '/events/daily?withRowCount=' + withRowCount, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyEvents(withRowCount) {
        return fetch(config.apiUrl + '/events/hourly?withRowCount=' + withRowCount, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}