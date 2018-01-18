import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule }   from '@angular/router';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormPopulationEstimateComponent } from './form-population-estimate/form-population-estimate.component';


import {DataElementService} from './providers/dataelement.service';
import {OptionSetsService} from './providers/Option-sets.service';
import {DatasetService} from './providers/dataset.service';
import {OrgUnitService} from './providers/orgUnit.service';
import {PopulationSetupFormComponent } from './population-setup-form/population-setup-form.component';

const appRoutes: Routes = [
  { path: 'pesetup', component: PopulationSetupFormComponent },
  { path: 'pecalculation',  component: FormPopulationEstimateComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    FormPopulationEstimateComponent,
    PopulationSetupFormComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataElementService,DatasetService, OptionSetsService, OrgUnitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
