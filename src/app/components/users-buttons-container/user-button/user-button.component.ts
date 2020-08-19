import { Component, OnInit, Input } from '@angular/core';
import { UserBasicDetails } from 'src/app/types/userBasicDetails';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.sass'],
})
export class UserButtonComponent implements OnInit {
  @Input() userData: UserBasicDetails;

  constructor() {}

  ngOnInit(): void {
    console.log({ userData: this.userData });
  }
}
