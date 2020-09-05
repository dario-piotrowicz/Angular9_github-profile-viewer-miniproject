import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSearchDetails } from 'src/app/types/userBasicDetails';
import { UserDetailsService } from 'src/app/services/user-details/user-details.service';
import { switchMap, finalize, delay, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass'],
})
export class HomePageComponent {
  public query = '';
  public usersData$: Observable<UserSearchDetails[]>;
  public loadingResults = false;
  public searchRateLimitErrorOccurred = false;

  constructor(private userBasicDetailsService: UserDetailsService) {}

  public searchUsers(): void {
    if (!this.query || this.loadingResults) {
      return;
    }

    this.loadingResults = true;
    this.usersData$ = of(null).pipe(
      switchMap(() => this.userBasicDetailsService.searchForUsers(this.query)),
      catchError((error: { type: string }) => {
        let emptyObs = of([]);
        if (error.type === 'rate-limit') {
          this.searchRateLimitErrorOccurred = true;
          this.loadingResults = false;
          emptyObs = emptyObs.pipe(
            delay(60000),
            tap(() => (this.searchRateLimitErrorOccurred = false))
          );
        }
        return emptyObs;
      }),
      delay(700),
      finalize(() => (this.loadingResults = false))
    );
  }
}
