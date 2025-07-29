"use client";

import "@/styles/repolist.css";

import { GitHubRepo } from "@/types/github";
import { useRouter } from "next/navigation";

type RepoListProps = {
  username: string;
  repos: GitHubRepo[];
};

export default function RepoList({ username, repos }: RepoListProps) {
  const router = useRouter();

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <div
          key={repo.name}
          className="repo-item"
          onClick={() => router.push(`/${username}/${repo.name}`)}
        >
          <h2>{repo.name}</h2>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}
