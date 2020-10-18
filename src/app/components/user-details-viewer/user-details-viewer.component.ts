import { Component, Input } from '@angular/core';
import { UserData } from 'src/app/types/userBasicDetails';
import { ReposListOrderBy } from '../repos-list/order-by.enum';

@Component({
  selector: 'app-user-details-viewer',
  templateUrl: './user-details-viewer.component.html',
  styleUrls: ['./user-details-viewer.component.sass'],
})
export class UserDetailsViewerComponent {
  @Input() userData: UserData;
  public ReposListOrderBy = ReposListOrderBy;
  public selectedReposListOrder = ReposListOrderBy.PUSH_TIME;
}
