"use client";

import "@/styles/repolist.css";
import { GitHubRepo } from "@/types/github";
import { useRouter } from "next/navigation";

export default function RepoList({
  username,
  repos,
}: {
  username: string;
  repos: GitHubRepo[];
}) {
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
