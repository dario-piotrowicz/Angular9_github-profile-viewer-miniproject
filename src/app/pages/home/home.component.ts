import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchDetails } from 'src/app/types/userBasicDetails';
import { UserDetailsService } from 'src/app/services/user-details/user-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  public query = '';
  public usersData: Observable<UserSearchDetails[]>;

  constructor(private userBasicDetailsService: UserDetailsService) {}

  public searchUsers(): void {
    this.usersData = this.userBasicDetailsService.searchForUsers(this.query);
  }
}
