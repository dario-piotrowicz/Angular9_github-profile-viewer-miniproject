import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserBasicDetails } from 'src/app/types/userBasicDetails';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.sass'],
})
export class UserButtonComponent {
  @Input() userData: UserBasicDetails;

  constructor(private router: Router) {}

  public navigateToUserDetailsPage(): void {
    this.router.navigateByUrl(`user/${this.userData.username}`);
  }
}
