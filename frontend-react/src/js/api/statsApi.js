import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class StatsApi extends React.Component {

   static getDailyStats() {
        return fetch(config.apiUrl + '/stats/daily', { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyStats() {
        return fetch(config.apiUrl + '/stats/hourly', { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}