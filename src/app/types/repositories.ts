export type Language = {
  name: string;
  percentage: number;
};

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
  num_of_stars: number;
  num_of_forks: number;
  language?: string;
  languages_url?: string;
  size_in_KB: number;
  description?: string;
};
