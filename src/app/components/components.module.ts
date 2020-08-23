import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UsersButtonsContainerModule } from './users-buttons-container/users-buttons-container.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, UsersButtonsContainerModule],
  exports: [HeaderComponent, UsersButtonsContainerModule],
})
export class ComponentsModule {}
