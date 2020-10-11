import { Component, Input, OnDestroy } from '@angular/core';
import { Repo, Language } from 'src/app/types/repositories';
import { faCodeBranch, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { ReposService } from 'src/app/services/repos/repos.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
  styleUrls: ['./repo-list-item.component.sass'],
})
export class RepoListItemComponent implements OnDestroy {
  @Input() repo: Repo;

  public reposLanguages: Language[] = null;

  public readonly dateFormat = 'MMM dd yyyy - HH:mm';

  public readonly forkFaIcon = faCodeBranch;
  public readonly infoCicleFaIcon = faInfoCircle;

  private ngUnsubscribe = new Subject();

  constructor(private reposService: ReposService) {}

  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public loadLanguages(): void {
    if (this.repo.languages_url) {
      this.reposService
        .getReposLanguages(this.repo.languages_url)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((languages) => (this.reposLanguages = languages));
    }
  }
}
