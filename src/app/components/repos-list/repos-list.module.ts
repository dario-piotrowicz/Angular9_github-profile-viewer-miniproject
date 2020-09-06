import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReposListComponent } from './repos-list.component';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';

@NgModule({
  declarations: [ReposListComponent, RepoListItemComponent],
  imports: [CommonModule],
  exports: [ReposListComponent],
})
export class ReposListModule {}
