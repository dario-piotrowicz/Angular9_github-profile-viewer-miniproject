import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSearchDetails } from 'src/app/types/userBasicDetails';
import { UserDetailsService } from 'src/app/services/user-details/user-details.service';
import { switchMap, finalize, delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent {
  public query = '';
  public usersData$: Observable<UserSearchDetails[]>;
  public loadingResults = false;

  constructor(private userBasicDetailsService: UserDetailsService) {}

  public searchUsers(): void {
    if (!this.query || this.loadingResults) {
      return;
    }

    this.loadingResults = true;
    this.usersData$ = of(null).pipe(
      switchMap(() => this.userBasicDetailsService.searchForUsers(this.query)),
      delay(700),
      finalize(() => (this.loadingResults = false))
    );
  }
}
