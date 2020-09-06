import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/types/repositories';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.sass'],
})
export class ReposListComponent {
  @Input() repos: Repo[];
  @Input() listContainsAllrepos = true;
}
