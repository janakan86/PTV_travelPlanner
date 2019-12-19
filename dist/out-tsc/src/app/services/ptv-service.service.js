var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import { apiURLs } from './api-info';
var PtvService = /** @class */ (function () {
    function PtvService(httpClient) {
        this.httpClient = httpClient;
    }
    PtvService.prototype.getDisruptions = function (disruptionParameters) {
        var requestURL = apiURLs.url_ptvDisruptionsBasic;
        if (disruptionParameters.routeID) {
            requestURL = requestURL + '/route/' + disruptionParameters.routeID;
        }
        else if (disruptionParameters.disruptionID) {
            requestURL = requestURL + '/' + disruptionParameters.disruptionID;
        }
        return this.getResults(requestURL);
    };
    PtvService.prototype.getRoutes = function (routeParameters) {
        var requestURL = apiURLs.url_ptvRoutesBase;
        //path parameter
        if (routeParameters.routeID) {
            requestURL = requestURL + '/' + routeParameters.routeID;
        }
        //query parameters
        if (routeParameters.routeNamePartial || routeParameters.routeTypes) {
            var httpParams = new HttpParams();
            if (routeParameters.routeNamePartial) {
                httpParams = httpParams.append('route_name', routeParameters.routeNamePartial);
            }
            console.log("1     requestURL " + requestURL);
            requestURL = requestURL + "?" + httpParams.toString();
            console.log("2     baseURL " + requestURL);
        }
        return this.getResults(requestURL, httpParams);
    };
    /*
      A common function that handles the HTTP get requests to the PTV API
      This function does the following
      1. construct URL by invoking the URL Constructor
      2. invokes a get request to the constructed URL
    */
    PtvService.prototype.getResults = function (requestURL, queryParams) {
        var _this = this;
        var baseURL = apiURLs.url_ptvBaseURL;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var requestBody = 'baseUrl=' + baseURL + '&' + 'request=' + requestURL;
        return this.httpClient.post(apiURLs.url_constructor, requestBody, httpOptions)
            .mergeMap(function (url) {
            console.log(" <><> url to be invoked " + url.url);
            return _this.httpClient.get(url.url);
        });
    };
    PtvService.prototype.handleError = function (err) {
        //console.log( err);
        return Observable.throw(err.message);
    };
    PtvService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], PtvService);
    return PtvService;
}());
export { PtvService };
//# sourceMappingURL=ptv-service.service.js.map