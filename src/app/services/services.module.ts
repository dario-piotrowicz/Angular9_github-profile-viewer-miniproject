import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsService } from '../services/user-details/user-details.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [UserDetailsService],
})
export class ServicesModule {}
