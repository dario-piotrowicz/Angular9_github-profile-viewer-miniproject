import { Repo } from './repositories';

export type UserSearchDetails = {
  username: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

export type UserBasicDetails = {
  username: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string;
  company?: string;
  blog?: string;
  bio?: string;
  location?: string;
  email?: string;
  hireable: boolean;
  num_of_public_repos: number;
  num_of_followers: number;
  num_of_following: number;
  created_at: Date;
  updated_at: Date;
};

export type UserData = UserBasicDetails & {
  repos: Repo[];
};
