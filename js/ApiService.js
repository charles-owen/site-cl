/**
 * @file
 * API Service, communication with the API
 */

import axios from 'axios';

import APIResponse from './APIResponse.js';

let ApiService = function(root) {

    //
    // Install response intercepter
    //
    axios.interceptors.response.use( (response) => {
        if(typeof(response.data) === 'string') {
            console.log(response.data);
            return new APIResponse({errors:
                [
                    {
                        'title': 'API Error',
                        'detail': response.data
                    }
                ]});
        }

        return new APIResponse(response.data);
    }, (error) => {

        let response;

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

            response = new APIResponse({errors:
                [
                    {
                        'title': 'API Error: Server communication error',
                        'detail': 'Server communication errror'
                    }
                ]});
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
            response = new APIResponse({errors:
                [
                    {
                        'title': 'API Error: Unable to communicate with server',
                        'detail': 'Server communication errror'
                    }
                ]});
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            response = new APIResponse({errors:
                [
                    {
                        'title': 'API Error: Error setting up request',
                        'detail': 'Server communication errror'
                    }
                ]});
        }
        // console.log(error.config);
        return Promise.reject(response);
    });


    this.post = function(path, args) {
        return axios.post(root + 'cl' + path, args);
    }

    this.get = function(path, args) {
        return axios.get(root + 'cl' + path, {params: args});
    }
}

export default ApiService;
