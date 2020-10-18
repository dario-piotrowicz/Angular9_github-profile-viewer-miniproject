import { Component, Input, OnChanges } from '@angular/core';
import { Repo } from 'src/app/types/repositories';
import { ReposListOrderBy } from './order-by.enum';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.sass'],
})
export class ReposListComponent implements OnChanges {
  @Input() repos: Repo[];
  @Input() order: ReposListOrderBy;

  public sortedRepos: Repo[];

  public ngOnChanges(): void {
    const stortFunction = this.getReposSortingFunction(this.order);
    this.sortedRepos = this.repos.sort(stortFunction);
  }

  private getReposSortingFunction(
    order: ReposListOrderBy
  ): (repoA: Repo, repoB: Repo) => number {
    switch (order) {
      case ReposListOrderBy.PUSH_TIME:
        return (repoA: Repo, repoB: Repo) =>
          repoB.pushed_at.getTime() - repoA.pushed_at.getTime();
      case ReposListOrderBy.UPDATE_TIME:
        return (repoA: Repo, repoB: Repo) =>
          repoB.updated_at.getTime() - repoA.updated_at.getTime();
      case ReposListOrderBy.CREATION_TIME:
        return (repoA: Repo, repoB: Repo) =>
          repoB.created_at.getTime() - repoA.created_at.getTime();
      default:
        return () => 0;
    }
  }
}
