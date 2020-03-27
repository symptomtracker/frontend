import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-contact-view',
  templateUrl: './profile-contact-view.component.html',
  styleUrls: ['./profile-contact-view.component.scss']
})
export class ProfileContactViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleActiveStatus(event) {
    var targetLabel: HTMLElement = <HTMLElement>event.target;
    for (let index = 0; index < targetLabel.parentElement.children.length; index++) {
      const element = targetLabel.parentElement.children.item(index);
      element.classList.remove("active");
    }
    targetLabel.classList.add("active");
  }
}
