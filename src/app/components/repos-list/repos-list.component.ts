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
      case ReposListOrderBy.WATCHERS:
        return (repoA: Repo, repoB: Repo) =>
          repoB.num_of_watchers - repoA.num_of_watchers;
      case ReposListOrderBy.STARS:
        return (repoA: Repo, repoB: Repo) =>
          repoB.num_of_stars - repoA.num_of_stars;
      case ReposListOrderBy.FORKS:
        return (repoA: Repo, repoB: Repo) =>
          repoB.num_of_forks - repoA.num_of_forks;
      case ReposListOrderBy.SIZE:
        return (repoA: Repo, repoB: Repo) =>
          repoB.size_in_KB - repoA.size_in_KB;
      default:
        return () => 0;
    }
  }
}
