import { Component, OnInit } from '@angular/core';
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

  constructor(private orgUnitService: OrgUnitService, private dataElementService:DataElementService, private datasetService: DatasetService) {
    this.populationEstimateDataElements = [];
    this.organisationUnitLevels = [];
    this.datasets = [];
    this.orgUnitLevel5Orgs = [];
    this.dateElements = [];
  }
  ngOnInit() {

    this.printMessassage();

    console.log("Boki Boki");
    const dataelementUrl ='../../../training/api/dataElements.json?paging=false&filter=id:in:[B8l5B3g3A1o,P2s5K6v9B4t,el2J9g0M7k5,cv0X8z5Q1t4,Br6B1a0A3m1,T1a9D2l2D3g,N8v4V1e2H7x,A3w0B4v6H2u,T2y5N0b1J7l,M2q7Q5r8U2x,Ec8M6k7F6w6,by3Q3i8Y5c3,cp1F0l5K7b3,T6e8Z4u9C5k,ew4A7p9Z0j8,Ct3Z1v5L9x3,dy0X9b1T7f1,V6s7P0n5H7r,R1e1V4x3I1n,aw9Z4q1H5q9,H2v6N1y4K5a,U7t1X3o6S2h,F7y5K7m2X4h,R7u5V1w8G1h,ae3V2f6Z5s5,Ej6M4r8L5d7,P8p1H8u3P8u,\
      Az6T7c6R1m1,\
      cn1E4u2A9o9,\
      ev2U5p2A4q4,\
      C3l1T8x2H2k,\
      Q5h2H0r6D7w,\
      H4w1D8h3L1q,\
      B9g3E1w1U6d,\
      Ai9L6v6F2f3,\
      H6u3U1e9W8o,\
      I3i8W9c7N9k,\
      Z6b9Y2q8C3b,\
      D2l5C2m5W1x,\
      U1k4U2c6J2i,\
      X2c6Z8n8V5t,\
      Q9a8P5w4P8p,\
      G5u6Y4v9N1l,\
      ds6J0x8W3g2,\
      R6w5W2b8W6v,\
      U1f1X1d4R0o,\
      F8k5B8u9Z6x,\
      br5G1e0G1w2,\
      dq3B4y5N7p4,\
      eWRNGRcOtmB,\
      ae6C1n4E2o5,\
      X3k9I2b6Z7w,\
      X5q7F2i5R4p,\
      aw4D1v7J0n8,\
      Dl9D9c9F6r6,\
      nVYc5IOmqWY,\
      F3b3H6u4C1p,\
      D2u4F7u8X3x,\
      B4u2S2n4X7c,\
      L0q7G4u2P1r,\
      Es5H1u3Z5w8,\
      Y8w8Q0h1B5y,\
      R9k9Y8y9Y6w,\
      aj8K6j2I3t6,\
      ey7D3g2F2v9]'


    const dataSetsUrl = '../../../training/api/dataSets.json?paging=false&fields=id, name&filter=id:eq:L2hwAPHJyTd&paging=false';
    const orgUnitLevelUrl = '';
    const orgUnitLevel5Orgsurl = '../../../training/api/organisationUnits.json?paging=false&filter=level:eq:5'
    const orgUnitLevelurl = '../../../training/api/organisationUnitLevels.json?paging=false'

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
    this.orgUnitService.getOrgUnitsService(orgUnitLevelurl).then(result =>{ this.organisationUnitLevels =  result.organisationUnitLevels
      console.log(result)
    }).catch(error => console.log(error));

  }


  printMessassage(){

    console.log("tetetet", "tetetetete")

  }

}
