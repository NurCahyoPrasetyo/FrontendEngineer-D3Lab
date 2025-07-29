"use client";

import "@/styles/repo.css";

import RepoContent from "@/components/RepoContent";
import { ReadmeProvider } from "@/context/ReadmeContext";

type RepoPageProps = {
  params: { username: string; repo: string };
};

export default function RepoPage({ params }: RepoPageProps) {
  return (
    <ReadmeProvider username={params.username} repo={params.repo}>
      <RepoContent repoName={params.repo} />
    </ReadmeProvider>
  );
}
