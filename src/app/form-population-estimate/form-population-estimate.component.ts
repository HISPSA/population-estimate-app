import {Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';
import {OrgUnitService} from '../providers/orgUnit.service';
import {DataElementService} from '../providers/dataelement.service';
import {DatasetService} from '../providers/dataset.service';

import {dataValues} from "../dataValues";
import {PHCHeadcount} from "../PHCHeadcount";


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

  private phcHeadCount: any;
  private PHCHeadcountColection: PHCHeadcount[];
  private PHCHeadcountObject: PHCHeadcount;


  OrgUnitArea: string=""
  OrgUnitLevel: string=""
  DateRangeStart: string= ""
  DateRangeEnd: string = ""
  order: string = "name";

   CurrentpopulationEstimates: any[];
   populationEstimatesDatavalues: dataValues[];
   MonthlyPHCHeadCounntTotalsDatavalues: any;
  populationdataLoaded: boolean;


headcountDataLoaded: boolean;

  orgunitHierachyChildren: any;


  private PHCHeadcountTotalHierachyCollection: PHCHeadcount[];
  private PHCHeadcountTotalHierachy: PHCHeadcount;
 private TotalHeadCountTotal: number=0;

  pqkbzu3K48GMonthlyHeadCountTotal: number=0;
  EnwfwzfrdQ7MonthlyHeadCountTotal: number=0;
  B5g5X2k5Q8kMonthlyHeadCountTotal: number=0;
  IovfSP4TNjFMonthlyHeadCountTotal: number=0;

  pqkbzu3K48under5years: string ="";
  EnwfwzfrdQ7G59years:string="";
  B5g5X2k5Q8kG1019years:string="";
  IovfSP4TNjFG20yearsandolder:string=""



  pqkbzu3K48under5yearsphcPercentageContribution: number=0;
  EnwfwzfrdQ7G59yearsphcPercentageContribution: number=0;
  B5g5X2k5Q8kG1019yearsphcPercentageContribution: number=0;
  IovfSP4TNjFG20yearsandolderphcPercentageContribution: number=0;



  constructor(private orgUnitService: OrgUnitService, private dataElementService:DataElementService, private datasetService: DatasetService) {
    this.populationEstimateDataElements = [];
    this.phcHeadcountDataElements =[];
    this.organisationUnitLevels = [];
    this.datasets = [];
    this.orgUnitLevel5Orgs = [];
    this.dateElements = [];
    this.phcHeadcountDataElements = [];
    this.CurrentpopulationEstimates = [];
    this.populationEstimatesDatavalues = [];
    this.MonthlyPHCHeadCounntTotalsDatavalues = [];
    this.PHCHeadcountColection =  [];
    this.PHCHeadcountObject  = new PHCHeadcount();
    this.orgunitHierachyChildren = [];
    this.PHCHeadcountTotalHierachy = new PHCHeadcount();
    this.PHCHeadcountTotalHierachyCollection = [];

    this.pqkbzu3K48GMonthlyHeadCountTotal = 0;

  }
  ngOnInit() {
    console.log("Boki Boki");
    const populationdataelementUrl ='http://localhost:8085/dhis/api/dataElements.json?filter=dataElementGroups.id:in:[Wi2PeVJPnpI]&paging=false&fields=*&paging=false';
    const phcHeadcountDataElementsUrl = 'http://localhost:8085/dhis/api/dataElements.json?filter=id:in:[B5g5X2k5Q8k,EnwfwzfrdQ7,IovfSP4TNjF,pqkbzu3K48G]&paging=false';

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
    this.TotalHeadCountTotal=0;
    this.pqkbzu3K48GMonthlyHeadCountTotal=0;
    this.EnwfwzfrdQ7MonthlyHeadCountTotal=0;
    this.B5g5X2k5Q8kMonthlyHeadCountTotal=0;
    this.IovfSP4TNjFMonthlyHeadCountTotal=0;

    this.pqkbzu3K48under5yearsphcPercentageContribution=0;
    this.EnwfwzfrdQ7G59yearsphcPercentageContribution=0;
    this.B5g5X2k5Q8kG1019yearsphcPercentageContribution=0;
    this.IovfSP4TNjFG20yearsandolderphcPercentageContribution=0;

    this.populationEstimatesDatavalues = [];
    this.phcHeadcountDataElements = [];

let  populationEstimatesValues = 'http://localhost:8085/dhis/api/dataValueSets.json?dataSet=L2hwAPHJyTd&period=2016&orgUnit='+ $event.target.value;
//let MonthlyPHCHeadcount = 'http://localhost:8085/dhis/api/dataValueSets.json?dataSet=ctgkIpBrhzn&period=201712&orgUnit='+ $event.target.value;
    let MonthlyPHCHeadcount = 'http://localhost:8085/dhis/api/dataValueSets.json?dataSet=Ux8RWIJyIk3&period=201712&orgUnit=yb0qGdJuNeR'
    let phcHeadcountDataElementsUrl = 'http://localhost:8085/dhis/api/dataElements.json?filter=id:in:[B5g5X2k5Q8k,EnwfwzfrdQ7,IovfSP4TNjF,pqkbzu3K48G]&paging=false';

    //use the URL to get children in given the parent Id

    let OrgunitHierachyUrl  = 'http://localhost:8085/dhis/api/organisationUnits.json?paging=false&filter=parent.id:eq:'+ $event.target.value
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

      this.phcHeadcountDataElements = [];
     // this.TotalHeadCountTotal = 0;
      //Get population Headcount
      this.dataElementService.getDataelementsService(phcHeadcountDataElementsUrl).then(result => {
        this.phcHeadcountDataElements =  result.dataElements
        console.log(result)

        this.PHCHeadcountColection = [];


        for (let dataElements of  this.phcHeadcountDataElements)
        {

         // this.pqkbzu3K48GMonthlyHeadCountTotal = 0;

         // this.PHCHeadcountObject.totalHeadcountdatavalue = 0;
          this.dataElementService.getDataelementsService(OrgunitHierachyUrl).then(result => {this.orgunitHierachyChildren =  result.organisationUnits
          let OrgLevelTotal = 0;
           let index = 0
            for (let orgHierachy of  this.orgunitHierachyChildren)
            {

//let lengthA= this.orgunitHierachyChildren.length;
         //   alert(lengthA)
             // console.log('Length..............................'+lengthA.toString())
             // index = index +1;

           //   alert(index)

              MonthlyPHCHeadcount = 'http://localhost:8085/dhis/api/dataValueSets.json?dataSet=Ux8RWIJyIk3&period=201712&orgUnit='+orgHierachy.id
              this.dataElementService.getDataelementsService(MonthlyPHCHeadcount).then( result => { this.MonthlyPHCHeadCounntTotalsDatavalues =  result.dataValues
                //  console.log(result)
                for (let phcHeadCount of  this.MonthlyPHCHeadCounntTotalsDatavalues )
                {

                  if (phcHeadCount.dataElement == dataElements.id){

                    if (phcHeadCount.dataElement == 'pqkbzu3K48G'){
                      if (!isNaN( Number(phcHeadCount.value))){
                        if (this.pqkbzu3K48GMonthlyHeadCountTotal==0){
                          this.pqkbzu3K48GMonthlyHeadCountTotal= Number(phcHeadCount.value)

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);
                          this.pqkbzu3K48under5years = dataElements.dataElement;
                        }else
                        {
                          this.pqkbzu3K48GMonthlyHeadCountTotal=this.pqkbzu3K48GMonthlyHeadCountTotal+Number(phcHeadCount.value);
                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);

                          this.pqkbzu3K48under5yearsphcPercentageContribution = (this.pqkbzu3K48GMonthlyHeadCountTotal+Number(phcHeadCount.value))/(this.TotalHeadCountTotal+ Number(phcHeadCount.value))


                          this.pqkbzu3K48under5years = dataElements.dataElement;

                          // this.PHCHeadcountObject.totalHeadcountdatavalue = this.pqkbzu3K48GMonthlyHeadCountTotal;
                        }
                        console.log("Total : pqkbzu3K48G:       "+this.pqkbzu3K48GMonthlyHeadCountTotal)
                      }



                    }else if (phcHeadCount.dataElement == 'EnwfwzfrdQ7')
                    {

                      if (!isNaN( Number(phcHeadCount.value))){
                        if (this.EnwfwzfrdQ7MonthlyHeadCountTotal==0){
                          this.EnwfwzfrdQ7MonthlyHeadCountTotal= Number(phcHeadCount.value)

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);

                          this.EnwfwzfrdQ7G59yearsphcPercentageContribution = this.EnwfwzfrdQ7MonthlyHeadCountTotal/this.TotalHeadCountTotal
                        }else
                        {
                          this.EnwfwzfrdQ7MonthlyHeadCountTotal=this.EnwfwzfrdQ7MonthlyHeadCountTotal+Number(phcHeadCount.value);
                          // this.PHCHeadcountObject.totalHeadcountdatavalue = this.pqkbzu3K48GMonthlyHeadCountTotal;

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);

                          if(this.TotalHeadCountTotal > 0)

                          {
                            this.EnwfwzfrdQ7G59yearsphcPercentageContribution = this.EnwfwzfrdQ7MonthlyHeadCountTotal/this.TotalHeadCountTotal
                          }
                        }
                        console.log("Total : EnwfwzfrdQ7:    "+this.EnwfwzfrdQ7MonthlyHeadCountTotal)

                        this.EnwfwzfrdQ7G59years = dataElements.name;
                      }




                    }else if (phcHeadCount.dataElement == 'B5g5X2k5Q8k'){

                      if (!isNaN( Number(phcHeadCount.value))){
                        if (this.B5g5X2k5Q8kMonthlyHeadCountTotal==0){
                          this.B5g5X2k5Q8kMonthlyHeadCountTotal= Number(phcHeadCount.value)

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);
                        }else
                        {
                          this.B5g5X2k5Q8kMonthlyHeadCountTotal=this.B5g5X2k5Q8kMonthlyHeadCountTotal+Number(phcHeadCount.value);
                          // this.PHCHeadcountObject.totalHeadcountdatavalue = this.pqkbzu3K48GMonthlyHeadCountTotal;

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);


                          if(this.TotalHeadCountTotal > 0)

                          {
                            this.B5g5X2k5Q8kG1019yearsphcPercentageContribution = this.B5g5X2k5Q8kMonthlyHeadCountTotal/this.TotalHeadCountTotal
                          }
                        }
                        console.log("Total : B5g5X2k5Q8k:        "+this.B5g5X2k5Q8kMonthlyHeadCountTotal)
                      }

                      this.B5g5X2k5Q8kG1019years = phcHeadCount.dataElement;

                    }else if (phcHeadCount.dataElement == 'IovfSP4TNjF')
                    {

                      if (!isNaN( Number(phcHeadCount.value))){
                        if (this.IovfSP4TNjFMonthlyHeadCountTotal==0){
                          this.IovfSP4TNjFMonthlyHeadCountTotal= Number(phcHeadCount.value)

                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+ Number(phcHeadCount.value);
                        }else
                        {
                          this.IovfSP4TNjFMonthlyHeadCountTotal=this.IovfSP4TNjFMonthlyHeadCountTotal+Number(phcHeadCount.value);
                          // this.PHCHeadcountObject.totalHeadcountdatavalue = this.pqkbzu3K48GMonthlyHeadCountTotal;
                          this.TotalHeadCountTotal = this.TotalHeadCountTotal+Number(phcHeadCount.value);

                          if(this.TotalHeadCountTotal > 0)

                          {
                            this.IovfSP4TNjFG20yearsandolderphcPercentageContribution = (this.IovfSP4TNjFMonthlyHeadCountTotal+Number(phcHeadCount.value))/(this.TotalHeadCountTotal+Number(phcHeadCount.value))
                          }

                        }
                        console.log("Total : IovfSP4TNjF:    "+this.IovfSP4TNjFMonthlyHeadCountTotal)
                      }

                      this.IovfSP4TNjFG20yearsandolder = phcHeadCount.dataElement;
                    }
                  //  alert(phcHeadCount.dataElement)
                    //alert(dataElements.id)

                  }
                }
              }).catch(error => console.log(error));
            }

       /*
            if (dataElements.id == 'pqkbzu3K48G'){
              this.PHCHeadcountObject = new PHCHeadcount();
              this.PHCHeadcountObject.dataElement = dataElements.name;
              this.PHCHeadcountObject.dataSet = 'Ux8RWIJyIk3';
              this.PHCHeadcountObject.period ='201212';
              this.PHCHeadcountObject.uid = dataElements.id
              this.PHCHeadcountObject.totalHeadcountdatavalue  = this.pqkbzu3K48GMonthlyHeadCountTotal;

              console.log('I am In    '+Number(this.pqkbzu3K48GMonthlyHeadCountTotal))

              this.headcountDataLoaded = true;
              this.PHCHeadcountColection.push(this.PHCHeadcountObject);

            }else if (dataElements.id == 'EnwfwzfrdQ7'){
              this.PHCHeadcountObject = new PHCHeadcount();

              this.PHCHeadcountObject.dataElement = dataElements.name;
              this.PHCHeadcountObject.dataSet = 'Ux8RWIJyIk3';
              this.PHCHeadcountObject.period ='201212';
              this.PHCHeadcountObject.totalHeadcountdatavalue  = this.EnwfwzfrdQ7MonthlyHeadCountTotal;

              this.headcountDataLoaded = true;
              this.PHCHeadcountColection.push(this.PHCHeadcountObject);
            }
            else if(dataElements.id == 'B5g5X2k5Q8k'){
              this.PHCHeadcountObject = new PHCHeadcount();
              this.PHCHeadcountObject.dataElement = dataElements.name;
              this.PHCHeadcountObject.dataSet = 'Ux8RWIJyIk3';
              this.PHCHeadcountObject.period ='201212';
              this.PHCHeadcountObject.totalHeadcountdatavalue  = this.B5g5X2k5Q8kMonthlyHeadCountTotal;

              this.headcountDataLoaded = true;
              this.PHCHeadcountColection.push(this.PHCHeadcountObject);
            }
            else if (dataElements.id == 'IovfSP4TNjF'){
              this.PHCHeadcountObject = new PHCHeadcount();
              this.PHCHeadcountObject.dataElement = dataElements.name;
              this.PHCHeadcountObject.dataSet = 'Ux8RWIJyIk3';
              this.PHCHeadcountObject.period ='201212';
              this.PHCHeadcountObject.totalHeadcountdatavalue  = this.IovfSP4TNjFMonthlyHeadCountTotal;

              this.headcountDataLoaded = true;
              this.PHCHeadcountColection.push(this.PHCHeadcountObject);
            }

            */


            console.log(this.PHCHeadcountColection)
          }).catch(error => console.log(error));
        }

        console.log("Total Headcount:   " + this.TotalHeadCountTotal)
      }).catch(error => console.log(error));
    }).catch(error => console.log(error));


/*
    for (var i in  this.PHCHeadcountColection) {
      if (i.uid == 'EnwfwzfrdQ7') {
        i.totalHeadcountdatavalue = this.pqkbzu3K48GMonthlyHeadCountTotal;
      }
    }
*/
  }
  GetPopulationtotalstasaa(){
  }

  onchange($event) {


      alert('hhhhhhhhhhhhh')


  }






  GetTotalHeadCount(){  }


  CalculatePopulationProportion(){}


  CalculatePouplationEstimates(){}





}
