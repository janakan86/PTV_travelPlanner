import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisruptionsComponent } from './components/disruptions/disruptions.component';
import { RoutesComponent } from './components/routes/routes.component'


//import {}


@NgModule({
  exports: [ RouterModule], 
  imports: [
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/distractions', pathMatch: 'full' } ,
        { path: 'routes', component:RoutesComponent } ,
        { path: 'distractions', component:DisruptionsComponent } ,
        
      ],
      { enableTracing: true }
      )

  ]
})
export class AppRoutingModule { }
