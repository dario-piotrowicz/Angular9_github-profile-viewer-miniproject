import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBasicDetails } from './types/userBasicDetails';
import { UserBasicDetailsService } from './services/user-basic-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public query = '';
  public usersData: Observable<UserBasicDetails[]>;

  constructor(private userBasicDetailsService: UserBasicDetailsService) {}

  public onClickHandler(): void {
    this.usersData = this.userBasicDetailsService.searchForUsers(this.query);
  }
}
