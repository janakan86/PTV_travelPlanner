var apiURLs = /** @class */ (function () {
    function apiURLs() {
    }
    apiURLs.url_constructor = 'http://127.0.0.1:8081';
    apiURLs.url_ptvBaseURL = 'https://timetableapi.ptv.vic.gov.au';
    apiURLs.url_ptvRoutesBase = '/v3/routes';
    apiURLs.url_ptvDisruptionsBasic = '/v3/disruptions';
    return apiURLs;
}());
export { apiURLs };
var routeParameters = /** @class */ (function () {
    function routeParameters() {
    }
    routeParameters.createHTTPParams = function () {
        //todo - write logic and replace similar logic from service class
        return null;
    };
    return routeParameters;
}());
export { routeParameters };
var disruptionParameters = /** @class */ (function () {
    function disruptionParameters() {
    }
    return disruptionParameters;
}());
export { disruptionParameters };
//# sourceMappingURL=api-info.js.map