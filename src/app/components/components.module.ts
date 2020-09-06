import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UsersButtonsContainerModule } from './users-buttons-container/users-buttons-container.module';
import { UserDetailsViewerComponent } from './user-details-viewer/user-details-viewer.component';
import { ReposListModule } from './repos-list/repos-list.module';

@NgModule({
  declarations: [HeaderComponent, UserDetailsViewerComponent],
  imports: [CommonModule, UsersButtonsContainerModule, ReposListModule],
  exports: [
    HeaderComponent,
    UsersButtonsContainerModule,
    UserDetailsViewerComponent,
  ],
})
export class ComponentsModule {}
