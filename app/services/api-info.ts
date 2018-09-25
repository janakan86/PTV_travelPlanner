import { HttpHeaders, HttpParams } from '@angular/common/http';
import { StringifyOptions } from 'querystring';

export class apiURLs{
    static url_constructor:string = 'http://127.0.0.1:8081';

    static url_ptvBaseURL = 'https://timetableapi.ptv.vic.gov.au';
    static url_ptvRoutesBase:string = '/v3/routes';
    static url_ptvDisruptionsBasic:string = '/v3/disruptions';
}


export class routeParameters{
    //path parameters
    routeID?:string;

    //query parameters
    routeNamePartial?:string; 
    routeTypes?: Number;

   static createHTTPParams():HttpParams {
        //todo - write logic and replace similar logic from service class
        return null;
    }
}


export class disruptionParameters{
    //path parameters
    routeID?:string;

    //query parameters
    disruptionID?:string;
}