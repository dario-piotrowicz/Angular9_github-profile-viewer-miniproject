import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserDetailsService } from '../services/user-details/user-details.service';
import { ReposService } from '../services/repos/repos.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [UserDetailsService, ReposService],
})
export class ServicesModule {}
