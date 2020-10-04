import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReposListComponent } from './repos-list.component';
import { RepoListItemComponent } from './repo-list-item/repo-list-item.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [ReposListComponent, RepoListItemComponent],
  imports: [CommonModule, FontAwesomeModule, PipesModule],
  exports: [ReposListComponent],
})
export class ReposListModule {}
