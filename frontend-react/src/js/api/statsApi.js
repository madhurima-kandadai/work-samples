import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class StatsApi {

    static getDailyStats(withRowCount, pageNumber, limit) {
        var data = {
            withRowCount: withRowCount,
            pageNumber: pageNumber,
            limit: limit
        };
        return fetch(config.apiUrl + '/stats/daily?withRowCount=' + withRowCount + '&pageNumber=' + pageNumber + '&limit=' + limit, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyStats(withRowCount, pageNumber, limit) {
        var data = {
            withRowCount: withRowCount,
            pageNumber: pageNumber,
            limit: limit
        };
        return fetch(config.apiUrl + '/stats/hourly?withRowCount=' + withRowCount + '&pageNumber=' + pageNumber + '&limit=' + limit, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}