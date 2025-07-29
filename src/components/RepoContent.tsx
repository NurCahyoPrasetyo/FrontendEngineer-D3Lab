"use client";

import { useReadme } from "@/context/ReadmeContext";
import ReadmeViewer from "./ReadmeViewer";
import Loading from "./ui/Loading";

type RepoContentProps = {
  repoName: string;
};

export default function RepoContent({ repoName }: RepoContentProps) {
  const { readme, loading } = useReadme();

  if (loading) return <Loading />;

  return (
    <main className="repo-container">
      <h1 className="repo-title">{repoName}</h1>
      <ReadmeViewer markdown={readme ?? "README not found."} />
    </main>
  );
}
