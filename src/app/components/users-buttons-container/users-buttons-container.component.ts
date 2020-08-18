import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBasicDetails } from 'src/app/types/userBasicDetails';

@Component({
  selector: 'app-users-buttons-container',
  templateUrl: './users-buttons-container.component.html',
  styleUrls: ['./users-buttons-container.component.sass']
})
export class UsersButtonsContainerComponent implements OnInit {

  @Input() usersData: Observable<UserBasicDetails[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
