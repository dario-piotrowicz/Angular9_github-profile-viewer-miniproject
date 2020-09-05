import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  UserBasicDetails,
  UserSearchDetails,
  UserData,
} from '../../types/userBasicDetails';
import { Observable, of, throwError, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repo } from 'src/app/types/repositories';
import { ReposService } from '../repos/repos.service';

@Injectable()
export class UserDetailsService {
  constructor(
    private httpClient: HttpClient,
    private reposService: ReposService
  ) {}

  public searchForUsers(query: string): Observable<UserSearchDetails[]> {
    return this.httpClient
      .get(`https://api.github.com/search/users?q=${query}&per_page=10000`)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (
            error.status === 403 &&
            error.statusText === 'rate limit exceeded'
          ) {
            return throwError({ type: 'rate-limit' });
          }
          return of({ items: [] });
        }),
        map((res: any) => res.items.map(this.converJsonToUserSearchDetails))
      );
  }

  public fetchUserData(username: string): Observable<UserData> {
    return forkJoin(
      this.httpClient
        .get(`https://api.github.com/users/${username}`)
        .pipe(map(this.converJsonToUserBasicDetails)),
      this.reposService.getUserPublicRepos(username)
    ).pipe(
      map(([userDetails, repos]: [UserBasicDetails, Repo[]]) => {
        console.log({ repos });
        return { ...userDetails, repos };
      })
    );
  }

  private converJsonToUserSearchDetails(json: any): UserSearchDetails {
    return {
      username: json.login,
      id: json.id,
      avatar_url: json.avatar_url,
      html_url: json.html_url,
    };
  }

  private converJsonToUserBasicDetails(json: any): UserBasicDetails {
    const userBasicDetails = {
      username: json.login,
      id: json.id,
      avatar_url: json.avatar_url,
      html_url: json.html_url,
      hireable: !!json.hireable,
      num_of_public_repos: json.public_repos,
      num_of_followers: json.followers,
      num_of_following: json.following,
      created_at: new Date(json.created_at),
      updated_at: new Date(json.updated_at),
    };

    if (json.name) {
      userBasicDetails['name'] = json.name;
    }
    if (json.company) {
      userBasicDetails['company'] = json.company;
    }
    if (json.location) {
      userBasicDetails['location'] = json.location;
    }
    if (json.blog) {
      userBasicDetails['blog'] = json.blog;
    }
    if (json.bio) {
      userBasicDetails['bio'] = json.bio;
    }
    if (json.email) {
      userBasicDetails['email'] = json.email;
    }

    return userBasicDetails;
  }
}
