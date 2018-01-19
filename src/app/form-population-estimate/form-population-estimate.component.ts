import {Component, OnInit } from '@angular/core';
import {OrgUnitService} from '../providers/orgUnit.service';
import {DataElementService} from '../providers/dataelement.service';
import {DatasetService} from '../providers/dataset.service';

import {dataValues} from "../dataValues";


@Component({
  selector: 'app-form-population-estimate',
  templateUrl: './form-population-estimate.component.html',
  styleUrls: ['./form-population-estimate.component.css']
})
export class FormPopulationEstimateComponent {
  private populationEstimateDataElements: any;

  private phcHeadcountDataElements: any;

  private organisationUnitLevels: any;
  private orgUnitLevel5Orgs: any;
  private datasets: any;
  private dateElements: any;



  OrgUnitArea: string=""
  OrgUnitLevel: string=""
  DateRangeStart: string= ""
  DateRangeEnd: string = ""
  order: string = "name";

  CurrentpopulationEstimates: any[];


   populationEstimatesDatavalues: dataValues[];

  populationdataLoaded: boolean;

  constructor(private orgUnitService: OrgUnitService, private dataElementService:DataElementService, private datasetService: DatasetService) {
    this.populationEstimateDataElements = [];
    this.phcHeadcountDataElements =[];

    this.organisationUnitLevels = [];
    this.datasets = [];
    this.orgUnitLevel5Orgs = [];
    this.dateElements = [];

    this.CurrentpopulationEstimates = [];
    this.populationEstimatesDatavalues = [];



  }
  ngOnInit() {
    console.log("Boki Boki");
    const populationdataelementUrl ='http://localhost:8085/dhis/api/dataElements.json?filter=dataElementGroups.id:in:[Wi2PeVJPnpI]&paging=false&fields=*&paging=false';
   const phcHeadcountDataElementsUrl = 'http://localhost:8085/dhis/api/dataElements.json?filter=id:in:[B5g5X2k5Q8k,EnwfwzfrdQ7,IovfSP4TNjF,pqkbzu3K48G,C6y6Q2v7L0i]&paging=false';

    const dataSetsUrl = 'http://localhost:8085/dhis/api/dataSets.json?paging=false&fields=id, name&filter=id:eq:L2hwAPHJyTd&paging=false';
    //const orgUnitLevelUrl = '../../training/api/organisationUnitLevels.json';
    const orgUnitLevel5Orgsurl = 'http://localhost:8085/dhis/api/organisationUnits.json?paging=false&filter=level:in:[4,5]';
    const orgUnitLevelUrl = 'http://localhost:8085/dhis/api/organisationUnitLevels.json?paging=false';


    //const populationEstimatesValues = 'http://localhost:8085/dhis/api/dataValueSets?dataSet=L2hwAPHJyTd&period=2016&orgUnit=v8PhhfZG6Dj';

    this.dataElementService.getDataelementsService(populationdataelementUrl).then(result => {this.populationEstimateDataElements =  result.dataElements
      console.log(result)
    }).catch(error => console.log(error));

    this.dataElementService.getDataelementsService(phcHeadcountDataElementsUrl).then(result => {this.phcHeadcountDataElements =  result.dataElements
      console.log(result)
    }).catch(error => console.log(error));

    this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(result => { this.orgUnitLevel5Orgs =  result.organisationUnits
      console.log(result)
    }).catch(error => console.log(error));


    /*
    this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(result => console.log(result)
    ).catch(error => console.log(error));



    this.datasetService.getDataSet(dataSetsUrl).then(result => {this.datasets =  result.dataSets
      console.log(result)
    }).catch(error => console.log(error));
    this.orgUnitService.getOrgUnitsService(orgUnitLevelUrl).then(result =>{ this.organisationUnitLevels =  result.organisationUnitLevels
      console.log(result)
    }).catch(error => console.log(error));

    */

  }
  onOrgunitSelection($event){
    this.populationEstimatesDatavalues = [];

let  populationEstimatesValues = 'http://localhost:8085/dhis/api/dataValueSets.json?dataSet=L2hwAPHJyTd&period=2016&orgUnit='+ $event.target.value;
    console.log('Organisation name is '+  $event.target.value);
    this.dataElementService.getDataelementsService(populationEstimatesValues).then(result => {this.CurrentpopulationEstimates =  result.dataValues
      console.log(result);
      this.populationdataLoaded = true;
      for (let pop of  this.CurrentpopulationEstimates)
      {
        let dataElementName: string='';
        let populaestimateLine= new dataValues();

        let DataElementUrl = 'http://localhost:8085/dhis/api/dataElements.json?paging=false&filter=id:eq:'+pop.dataElement;

        this.dataElementService.getDataelementsService(DataElementUrl).then(result => {dataElementName =  result.dataElements[0].name

          populaestimateLine.dataElement = dataElementName;
          populaestimateLine.value = pop.value;
          populaestimateLine.dataSet = pop.dataSet;
          populaestimateLine.orgUnit = pop.orgUnit;
          populaestimateLine.period  = pop.period;
          populaestimateLine.uid = pop.dataElement
          this.populationEstimatesDatavalues.push(populaestimateLine);

        }).catch(error => console.log(error));
      }
    }).catch(error => console.log(error));
  }



  GetPopulationtotalstasaa(){


  }

  GetTotalHeadCount(){

  }


  CalculatePopulationProportion(){}


  CalculatePouplationEstimates(){}



}
