import {Component, OnInit } from '@angular/core';
import {OrgUnitService} from '../providers/orgUnit.service';
import {DataElementService} from '../providers/dataelement.service';
import {DatasetService} from '../providers/dataset.service';


@Component({
  selector: 'app-form-population-estimate',
  templateUrl: './form-population-estimate.component.html',
  styleUrls: ['./form-population-estimate.component.css']
})
export class FormPopulationEstimateComponent {
  private populationEstimateDataElements: any;
  private organisationUnitLevels: any;
  private orgUnitLevel5Orgs: any;
  private datasets: any;
  private dateElements: any;

  OrgUnitArea: string=""
  OrgUnitLevel: string=""
  DateRangeStart: string= ""
  DateRangeEnd: string = ""

  constructor(private orgUnitService: OrgUnitService, private dataElementService:DataElementService, private datasetService: DatasetService) {
    this.populationEstimateDataElements = [];
    this.organisationUnitLevels = [];
    this.datasets = [];
    this.orgUnitLevel5Orgs = [];
    this.dateElements = [];
  }
  ngOnInit() {

    console.log("Boki Boki");
    const dataelementUrl ='../../../training/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';
    const dataSetsUrl = '../../../training/api/dataSets.json?paging=false&fields=id, name&filter=id:eq:L2hwAPHJyTd&paging=false';
    //const orgUnitLevelUrl = '../../training/api/organisationUnitLevels.json';
    const orgUnitLevel5Orgsurl = '../../../training/api/organisationUnits.json?paging=false&filter=level:eq:4'
    const orgUnitLevelUrl = '../../../training/api/organisationUnitLevels.json?paging=false'

    this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(result => console.log(result)
    ).catch(error => console.log(error));

    this.orgUnitService.getOrgUnitsService(orgUnitLevel5Orgsurl).then(result => { this.orgUnitLevel5Orgs =  result.organisationUnits
      console.log(result)
    }).catch(error => console.log(error));
    this.dataElementService.getDataelementsService(dataelementUrl).then(result => {this.dateElements =  result.dataElements
      console.log(result)
    }).catch(error => console.log(error));
    this.datasetService.getDataSet(dataSetsUrl).then(result => {this.datasets =  result.dataSets
      console.log(result)
    }).catch(error => console.log(error));
    this.orgUnitService.getOrgUnitsService(orgUnitLevelUrl).then(result =>{ this.organisationUnitLevels =  result.organisationUnitLevels
      console.log(result)
    }).catch(error => console.log(error));

  }


}
