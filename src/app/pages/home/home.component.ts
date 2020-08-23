import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchDetails } from 'src/app/types/userBasicDetails';
import { UserBasicDetailsService } from 'src/app/services/user-basic-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  public query = '';
  public usersData: Observable<UserSearchDetails[]>;

  constructor(private userBasicDetailsService: UserBasicDetailsService) {}

  public searchUsers(): void {
    this.usersData = this.userBasicDetailsService.searchForUsers(this.query);
  }
}
