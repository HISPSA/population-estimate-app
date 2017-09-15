import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormPopulationEstimateComponent } from './form-population-estimate/form-population-estimate.component';


import {DataElementService} from './providers/dataelement.service';
import {OptionSetsService} from './providers/Option-sets.service';
import {DatasetService} from './providers/dataset.service';

@NgModule({
  declarations: [
    AppComponent,
    FormPopulationEstimateComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [DataElementService,DatasetService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
