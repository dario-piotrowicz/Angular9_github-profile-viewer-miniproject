import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchDetails } from './types/userBasicDetails';
import { UserBasicDetailsService } from './services/user-basic-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public query = '';
  public usersData: Observable<UserSearchDetails[]>;

  constructor(private userBasicDetailsService: UserBasicDetailsService) {}

  public searchUsers(): void {
    this.usersData = this.userBasicDetailsService.searchForUsers(this.query);
  }
}
