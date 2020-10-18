import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo, Language } from 'src/app/types/repositories';
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
      id: json.id,
      num_of_watchers: json.watchers_count,
      num_of_stars: json.stargazers_count,
      num_of_forks: json.forks_count,
      size_in_KB: json.size,
    };

    if (json.homepage) {
      repo.homepage = json.homepage;
    }

    if (json.description) {
      repo.description = json.description;
    }

    if (json.language) {
      repo.language = json.language;
    }

    if (json.languages_url) {
      repo.languages_url = json.languages_url;
    }

    return repo;
  }

  public getReposLanguages(url: string): Observable<Language[]> {
    return this.httpClient.get(url).pipe(map(this.convertLanguagesJson));
  }

  private convertLanguagesJson(json: any): Language[] {
    const sum: number = Object.keys(json)
      .map((lang) => json[lang])
      .reduce((acc, curr) => acc + curr);

    return Object.keys(json)
      .map((lang) => {
        const actualPercentage: number = (json[lang] / sum) * 100;
        const percentageStrMax2Decimals = actualPercentage
          .toFixed(2)
          .replace(/\.?0+$/, '');
        const percentage = parseFloat(percentageStrMax2Decimals);
        return {
          name: lang,
          percentage,
        };
      })
      .sort((langA, langB) => langB.percentage - langA.percentage);
  }
}
