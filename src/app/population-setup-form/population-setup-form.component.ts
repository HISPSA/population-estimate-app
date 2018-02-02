import { Component, OnInit } from '@angular/core';

import {OrgUnitService} from '../providers/orgUnit.service';
import {DataElementService} from '../providers/dataelement.service';
import {DatasetService} from '../providers/dataset.service';
import {DataElements} from "../DataElements";
import {DataStoreConfig} from "../DataStoreConfig";

@Component({
  selector: 'app-population-setup-form',
  templateUrl: './population-setup-form.component.html',
  styleUrls: ['./population-setup-form.component.css']
})
export class PopulationSetupFormComponent implements OnInit {
  private dateElements: any;

  private populationDataelements: any;
  private populationSelectedDataElements: any;
  private populationFactor: any;

  private test:string;
 // private  datastoreurl: string = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';

 private  datastoreurl:string = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';

  private datastore:DataStoreConfig;

  constructor(private orgunitservice: OrgUnitService, private dataelemnetService: DataElementService, private dataservice: DatasetService) {
    this.dateElements = [];
    this.populationDataelements = [];
    this.populationSelectedDataElements = [];
    this.populationFactor = [];
    this.datastore = new DataStoreConfig();

 //   this.datastoreurl = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';
  }

  ngOnInit() {
   // const dataelementUrl ='https://staging.dhis.dhmis.org/mp/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';
 // const datastoreurl = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';

  /*
    this.dataelemnetService.getDataelementsService(this.datastoreurl).then(result => {this.dateElements =  result.dataElements
      console.log(result)
    }).catch(error => console.log(error));
*/

  }
  selectDataElement($event, uid: string){
  //  const datastoreurl = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';


    for (let pDe of  this.populationDataelements)
    {
      if (pDe.id==uid){
        this.populationSelectedDataElements.push(pDe);
        this.populationDataelements = this.populationDataelements.filter(item => item !== pDe);
        this.dataelemnetService.update(this.datastoreurl,this.populationDataelements).then(result => {
          console.log(result)
        }).catch(error => console.log(error));
        this.datastore.dataElements= this.populationDataelements;
        this.datastore.PopulationFactor=[];
        this.datastore.SelecteddataElements= this.populationSelectedDataElements;
        this.dataelemnetService.update(this.datastoreurl,this.datastore).then(result => {
          console.log(result)
        }).catch(error => console.log(error));
      }
    }
  }

  RemoveSelectedDataElement($event, uid: string){
    const datastoreurl = 'https://staging.dhis.dhmis.org/mp/api/dataStore/PopulationEstimate/Setting.json';
    for (let sDe of  this.populationSelectedDataElements)
    {
      if (sDe.id==uid){
        this.populationDataelements.push(sDe);
        this.populationSelectedDataElements = this.populationSelectedDataElements.filter(item => item !== sDe);
        this.dataelemnetService.update(datastoreurl,this.populationSelectedDataElements).then(result => {
          console.log(result)
        }).catch(error => console.log(error));

        this.datastore.dataElements= this.populationDataelements;
        this.datastore.PopulationFactor=[];
        this.datastore.SelecteddataElements= this.populationSelectedDataElements;

        this.dataelemnetService.update(datastoreurl,this.datastore).then(result => {
          console.log(result)
        }).catch(error => console.log(error));
      }
    }
  }

 SetPopupationDataElements($event){
  if ($event.target.value=="L2hwAPHJyTd")
   {
     this.dataelemnetService.getDataelementsService(this.datastoreurl).then(result => {this.populationDataelements =  result.dataElements
       console.log(result)
     }).catch(error => console.log(error));
     this.dataelemnetService.getDataelementsService(this.datastoreurl).then(result => {this.populationSelectedDataElements =  result.SelecteddataElements
       console.log(result)
     }).catch(error => console.log(error));

   }else{
    this.populationDataelements =[];
    this.populationSelectedDataElements =[];
  }


  }



}
