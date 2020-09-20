import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReposListComponent } from './repos-list.component';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';

@NgModule({
  declarations: [ReposListComponent, RepoListItemComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ReposListComponent],
})
export class ReposListModule {}
