import { Component, OnInit } from '@angular/core';

import {OrgUnitService} from '../providers/orgUnit.service';
import {DataElementService} from '../providers/dataelement.service';
import {DatasetService} from '../providers/dataset.service';

@Component({
  selector: 'app-population-setup-form',
  templateUrl: './population-setup-form.component.html',
  styleUrls: ['./population-setup-form.component.css']
})
export class PopulationSetupFormComponent implements OnInit {
  private dateElements: any;

  constructor(private orgunitservice: OrgUnitService, private dataelemnetService: DataElementService, private dataservice: DatasetService) {
    this.dateElements = [];
  }

  ngOnInit() {
    const dataelementUrl ='../../../training/api/dataElements.json?filter=dataElementGroups.id:in:[qWfLGQkNhLB]&paging=false';

    this.dataelemnetService.getDataelementsService(dataelementUrl).then(result => {this.dateElements =  result.dataElements
      console.log(result)
    }).catch(error => console.log(error));

  }

}
