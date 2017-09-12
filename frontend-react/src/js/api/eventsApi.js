import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';


export default class EventsApi {

    static getDailyEvents(withRowCount, pageNumber, limit) {
        var data = {
            withRowCount: withRowCount,
            pageNumber: pageNumber,
            limit: limit
        };
        return fetch(config.apiUrl + '/events/daily?withRowCount=' + withRowCount + '&pageNumber=' + pageNumber + '&limit=' + limit, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static getHourlyEvents(withRowCount, pageNumber, limit) {
        var data = {
            withRowCount: withRowCount,
            pageNumber: pageNumber,
            limit: limit
        };
        return fetch(config.apiUrl + '/events/hourly?withRowCount=' + withRowCount + '&pageNumber=' + pageNumber + '&limit=' + limit, { method: 'GET' }, { 'mode': 'no-cors' })
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

}