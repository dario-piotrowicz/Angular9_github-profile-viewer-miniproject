import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersButtonsContainerModule } from './users-buttons-container/users-buttons-container.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UsersButtonsContainerModule],
  exports: [UsersButtonsContainerModule],
})
export class ComponentsModule {}
