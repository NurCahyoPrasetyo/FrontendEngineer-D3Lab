"use client";

import "@/styles/repo.css";

import RepoContent from "@/components/RepoContent";
import { ReadmeProvider } from "@/context/ReadmeContext";
import { useParams } from "next/navigation";

export default function RepoPage() {
  const params = useParams();
  const username = params?.username as string;
  const repo = params?.repo as string;

  return (
    <ReadmeProvider username={username} repo={repo}>
      <RepoContent repoName={repo} />
    </ReadmeProvider>
  );
}
