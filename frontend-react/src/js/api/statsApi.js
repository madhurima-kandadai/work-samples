import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class StatsApi {

    static getDailyStats(withRowCount) {
        return fetch(config.apiUrl + '/stats/daily/', { withRowCount: withRowCount, paramX: 'abc' }, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyStats(withRowCount) {
        return fetch(config.apiUrl + '/stats/hourly?withRowCount' + withRowCount, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}