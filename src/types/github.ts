export type GitHubProfile = {
  login: string;
  avatar_url: string;
  bio: string | null;
  name: string;
  public_repos: number;
  html_url: string;
  followers: number;
  following: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};
