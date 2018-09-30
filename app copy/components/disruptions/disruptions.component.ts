import { Component, OnInit } from '@angular/core';
import { Disruption } from '../../models/disruptions';
import { DisruptionsDisplay } from '../../models/disruptions_display';
import { Routes } from '../../models/routes'
import { PtvService } from '../../services/ptv-service.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-disruptions',
  templateUrl: './disruptions.component.html',
  styleUrls: ['./disruptions.component.css']
})
export class DisruptionsComponent implements OnInit {

  constructor(private ptvService : PtvService) {}

  disruptions:DisruptionsDisplay[];
  noDisruptionsMsg:string = "No disruptions to display "

  routeSearchWord:string;
  filteredRoutes:Routes["routes"];
  isRoutesShown:boolean= ((this.filteredRoutes == undefined)?false:((this.filteredRoutes.length>0)?false:true));


  searchedRoute: FormControl = new FormControl();


  //input for radio button
  routeTypes:any[] = [{routeTypeCode:0, routeTypeDescription:'Train'},
                      {routeTypeCode:1, routeTypeDescription:'Tram'},
                      {routeTypeCode:2, routeTypeDescription:'Bus'},
                      {routeTypeCode:3, routeTypeDescription:'Vline'},
                      {routeTypeCode:4, routeTypeDescription:'Night Train'}];


  selectedRouteType:any = this.routeTypes[0].routeTypeCode;
 


  /* populate the list of values to select Route */
  populateFilteredRoutes(searchedRouteWord:string): void{
    console.log("routeTypes:this.selectedRouteType "+ this.selectedRouteType);
    this.ptvService.getRoutes({routeNamePartial:searchedRouteWord,
                               routeTypes:this.selectedRouteType}).subscribe(
      routes=> (this.filteredRoutes = routes.routes,
      console.log(routes) 
      )
      
    );
  }


  onRouteSelection(routeID:string){
    this.getDisruptions(routeID);
  }

  /* the returned Disruptions is a complex JSON. Need to filter out the relevant
     details and display them in a simplified manner
  */
  filerAndStoreDisruptions(disruption:Disruption){
    this.disruptions = DisruptionsDisplay.getdisruptionsDisplay(disruption);
  }


  getDisruptions(routeID:string):void{
    this.ptvService.getDisruptions({routeID:routeID}).subscribe(
        disruptions=>(
          this.filerAndStoreDisruptions(disruptions)

        )

    )
  }


  ngOnInit(): void {
    /* subscribe to the valueChange observable. This is used to auto populate the routes drop down list,
       when the user types in values to search */
    this.searchedRoute.valueChanges.subscribe(enteredText => (
        this.searchedRoute = enteredText,
        this.populateFilteredRoutes(enteredText)
      )
    );
  }

}
