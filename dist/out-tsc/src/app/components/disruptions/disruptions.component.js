var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PtvService } from '../../services/ptv-service.service';
import { FormControl } from '@angular/forms';
var DisruptionsComponent = /** @class */ (function () {
    function DisruptionsComponent(ptvService) {
        this.ptvService = ptvService;
        this.routeSearchWord = "enter";
        this.searchedRoute = new FormControl();
        console.log('length');
    }
    DisruptionsComponent.prototype.populateFilteredRoutes = function (searchedRouteWord) {
        var _this = this;
        this.routeSearchWord = "shit";
        this.ptvService.getRoutes({ routeNamePartial: searchedRouteWord }).subscribe(function (routes) { return (_this.filteredRoutes = routes,
            console.log(routes)); });
    };
    DisruptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* subscribe to the valueChange observable. We use this */
        this.searchedRoute.valueChanges.subscribe(function (enteredText) { return (_this.populateFilteredRoutes(enteredText),
            console.log("entered Text " + enteredText)); });
    };
    DisruptionsComponent = __decorate([
        Component({
            selector: 'app-disruptions',
            templateUrl: './disruptions.component.html',
            styleUrls: ['./disruptions.component.css']
        }),
        __metadata("design:paramtypes", [PtvService])
    ], DisruptionsComponent);
    return DisruptionsComponent;
}());
export { DisruptionsComponent };
//# sourceMappingURL=disruptions.component.js.map