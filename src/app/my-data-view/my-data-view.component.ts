import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-data-view',
  templateUrl: './my-data-view.component.html',
  styleUrls: ['./my-data-view.component.scss']
})

@Injectable()
export class MyDataViewComponent implements OnInit {
  constructor(
  ) {  }
  ngOnInit(): void {
  }
}

