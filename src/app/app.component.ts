import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserBasicDetails } from './types/userBasicDetails';
import { UserBasicDetailsService } from './services/user-basic-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public searchTerm = '';
  public userData: Observable<UserBasicDetails>;

  constructor(private userBasicDetailsService: UserBasicDetailsService){}

  public onClickHandler(): void {
    this.userData = this.userBasicDetailsService.fetchUserData(this.searchTerm);
  }


}
