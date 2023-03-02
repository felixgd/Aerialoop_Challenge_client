import { APISettings } from '../config.js';
export default {
    getList( ){
        return fetch( APISettings.baseURL + '/itineraries', {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
    getOne( ID ){
        return fetch( APISettings.baseURL + '/itinerary/' + ID, {
                    method: 'GET',
            headers: APISettings.headers,
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    },
    getAll( ){
        return fetch( APISettings.baseURL + '/itineraries/all', {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    }
}