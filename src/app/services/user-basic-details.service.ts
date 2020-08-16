import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userBasicDetails } from '../types/userBasicDetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserBasicDetailsService {

  constructor(private httpClient: HttpClient) {}

  public fetchUserData(username: string): Observable<userBasicDetails> {
    return this.httpClient.get(`https://api.github.com/users/${username}`
    ).pipe(
      map( (json: any) => ({
          username: json.login,
          id: json.id,
          avatar_url: json.avatar_url,
          html_url: json.html_url,
          name: json.name,
          company: json.company,
          blog: json.blog,
          location: json.location,
          email: json.email,
          hireable: json.hireable,
          num_of_public_repos: json.public_repos,
          num_of_followers: json.followers,
          num_of_following: json.following,
          created_at: new Date(json.created_at),
          updated_at: new Date(json.updated_at)
        })
      )
    );
  }
}
