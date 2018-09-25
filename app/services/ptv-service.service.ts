import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

import { Disruption } from '../models/disruptions';
import { Routes } from '../models/routes';
import { URL } from '../models/url';
import {apiURLs, routeParameters, disruptionParameters} from './api-info'

@Injectable()
export class PtvService {

  returnData:string;
  builtURL : string;

  constructor(private httpClient:HttpClient) {
  }


  getDisruptions(disruptionParameters?:disruptionParameters): Observable<Disruption>{
    var requestURL: string = apiURLs.url_ptvDisruptionsBasic;

    //path parameters
    if(disruptionParameters.routeID){
      requestURL = requestURL+ '/route/'+disruptionParameters.routeID;
    }
    else if(disruptionParameters.disruptionID){
      requestURL = requestURL +'/'+disruptionParameters.disruptionID;
    }

    return this.getResults(requestURL) as Observable<Disruption>;

  }


  getRoutes(routeParameters?:routeParameters) : Observable<Routes>{
    var requestURL: string = apiURLs.url_ptvRoutesBase;

    //path parameter
    if(routeParameters.routeID){
      requestURL = requestURL+ '/'+routeParameters.routeID;
    }

    //query parameters
    if(routeParameters.routeNamePartial || routeParameters.routeTypes){

      var httpParams = new HttpParams();
      
      if(routeParameters.routeNamePartial){
          httpParams =  httpParams.append('route_name',routeParameters.routeNamePartial);
          
      }
      if (routeParameters.routeTypes!=null){
        console.log(" setting route type "+ routeParameters.routeTypes);
        httpParams =  httpParams.append('route_types',routeParameters.routeTypes.toString());
      }

        requestURL = requestURL+"?"+httpParams.toString();
        console.log("reques URL "+ requestURL);
    }
    
    return this.getResults(requestURL,httpParams) as Observable<Routes>;
  }



  /*
    A common function that handles the HTTP get requests to the PTV API
    This function does the following
    1. construct URL by invoking the URL Constructor
    2. invokes a get request to the constructed URL
  */
  getResults(requestURL:string, queryParams?:HttpParams):Observable<any>{
      var baseURL: string = apiURLs.url_ptvBaseURL;

        const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/x-www-form-urlencoded'
          })
        };

        /* we are sending URI as a parameter, so it needs to be encoded to prevent confusions between the &, ? in the actual URL */
        var requestBody:string = 'baseUrl=' + encodeURIComponent(baseURL)+ '&'+'request=' + encodeURIComponent(requestURL);


      return this.httpClient.post<any>(apiURLs.url_constructor,
                                      requestBody,
                                      httpOptions)
                                        .mergeMap((url:URL)=>{
                                          console.log(" <><> url to be invoked " + url.url);
                                          return this.httpClient.get(url.url);
                                        });
  }

  private handleError(err: HttpErrorResponse) {
    //console.log( err);
    return Observable.throw(err.message);
 }
   
}