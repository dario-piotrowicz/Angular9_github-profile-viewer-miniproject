import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { userBasicDetails } from './types/userBasicDetails';
import { UserBasicDetailsService } from './services/user-basic-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public searchTerm = '';
  public userData: Observable<userBasicDetails>;

  constructor(private userBasicDetailsService: UserBasicDetailsService){}

  public onClickHandler(): void {
    this.userData = this.userBasicDetailsService.fetchUserData(this.searchTerm);
  }


}
