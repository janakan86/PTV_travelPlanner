import { Component, OnInit } from '@angular/core';
import { Routes } from '../../models/routes';
import { PtvService } from '../../services/ptv-service.service';



@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {


  routes : Routes;

  constructor(private ptvService : PtvService) { }

  ngOnInit() : void {
    this.ptvService.getRoutes({}).subscribe(
    routes=>{
      console.log(routes);
      //this.routes = routes;      
    },
    err=>{
      console.log();
    });

  }
}