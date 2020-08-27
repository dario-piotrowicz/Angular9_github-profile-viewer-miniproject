import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, delay, finalize, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserDetailsService } from 'src/app/services/user-details/user-details.service';
import { UserBasicDetails } from 'src/app/types/userBasicDetails';

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.sass'],
})
export class UserDetailsPageComponent implements OnInit {
  public userData$: Observable<UserBasicDetails>;
  public loadingDetails = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    userDetailsService: UserDetailsService
  ) {
    this.userData$ = activatedRoute.params.pipe(
      take(1),
      switchMap((params) => userDetailsService.fetchUserData(params.username)),
      delay(700),
      finalize(() => (this.loadingDetails = false))
    );
  }

  ngOnInit(): void {}
}
