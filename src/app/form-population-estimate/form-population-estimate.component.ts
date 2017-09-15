import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-population-estimate',
  templateUrl: './form-population-estimate.component.html',
  styleUrls: ['./form-population-estimate.component.css']
})
export class FormPopulationEstimateComponent implements OnInit {

  private populationEstimateDataElements: any;
  private orgUnitsWithPopulationHeadCount: any;
  private orgUnitLevel: any;

  constructor() {
    this.populationEstimateDataElements = [];
    this.orgUnitsWithPopulationHeadCount = [];
    this.orgUnitLevel = [];
  }

  ngOnInit() {
  }

}
