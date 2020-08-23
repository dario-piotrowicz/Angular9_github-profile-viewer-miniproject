import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserButtonComponent } from './user-button/user-button.component';
import { UsersButtonsContainerComponent } from './users-buttons-container.component';

@NgModule({
  declarations: [UserButtonComponent, UsersButtonsContainerComponent],
  imports: [CommonModule],
  exports: [UsersButtonsContainerComponent],
})
export class UsersButtonsContainerModule {}
