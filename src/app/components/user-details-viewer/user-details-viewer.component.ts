import { Component, Input } from '@angular/core';
import { UserBasicDetails } from 'src/app/types/userBasicDetails';

@Component({
  selector: 'app-user-details-viewer',
  templateUrl: './user-details-viewer.component.html',
  styleUrls: ['./user-details-viewer.component.sass'],
})
export class UserDetailsViewerComponent {
  @Input() userDetails: UserBasicDetails;
}
