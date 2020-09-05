export type Repo = {
  archived: boolean;
  disabled: boolean;
  created_at: Date;
  updated_at: Date;
  pushed_at: Date;
  is_a_fork: boolean;
  name: string;
  homepage?: string;
  url: string;
  id: number;
  num_of_watchers: number;
  num_of_forks: number;
  language: string;
  size: number;
};
