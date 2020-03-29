import { Component, OnInit } from '@angular/core';
import {Healthoffice} from "../../models/healthoffice.model";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-healthoffice-finder',
  templateUrl: './healthoffice-finder.component.html',
  styleUrls: ['./healthoffice-finder.component.scss']
})
export class HealthofficeFinderComponent implements OnInit {

  plz: number;
  healthOffice: Healthoffice;

  constructor(
    private dataService: DataService
  ) {  }

  ngOnInit(): void {}

  getHealthOffice(plz: number) {
    this.dataService.sendHealthOfficeRequest(plz.toString()).subscribe((data: Healthoffice)=> {
      this.healthOffice = data;
    });
  }

  submitPLZ() {
    this.getHealthOffice(this.plz);
  }

}
