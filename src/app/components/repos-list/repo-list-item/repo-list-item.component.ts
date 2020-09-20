import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/types/repositories';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repo-list-item',
  templateUrl: './repo-list-item.component.html',
  styleUrls: ['./repo-list-item.component.sass'],
})
export class RepoListItemComponent {
  @Input() repo: Repo;

  public readonly dateFormat = 'MMM dd yyyy - HH:mm';

  public readonly forkFaIcon = faCodeBranch;
}
