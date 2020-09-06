import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from 'src/app/types/repositories';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ReposService {
  constructor(private httpClient: HttpClient) {}

  public getUserPublicRepos(username): Observable<Repo[]> {
    return this.httpClient
      .get(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`
      )
      .pipe(map((repos: any[]) => repos.map(this.convertJsonToRepo)));
  }

  private convertJsonToRepo(json: any): Repo {
    const repo: Repo = {
      archived: !!json.archived,
      disabled: !!json.disabled,
      created_at: new Date(json.created_at),
      updated_at: new Date(json.updated_at),
      pushed_at: new Date(json.pushed_at),
      is_a_fork: !!json.fork,
      name: json.name,
      url: json.html_url,
      id: json.number,
      num_of_watchers: json.watchers_count,
      num_of_forks: json.forks_count,
      language: json.language,
      size: json.size,
    };

    if (json.homepage) {
      repo.homepage = json.homepage;
    }

    if (json.description) {
      repo.description = json.description;
    }
    return repo;
  }
}
