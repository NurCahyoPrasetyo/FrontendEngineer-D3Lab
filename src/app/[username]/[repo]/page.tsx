import RepoContent from "@/components/RepoContent";
import { ReadmeProvider } from "@/context/ReadmeContext";
import "@/styles/repo.css";

export default function RepoPage({
  params,
}: {
  params: { username: string; repo: string };
}) {
  return (
    <ReadmeProvider username={params.username} repo={params.repo}>
      <RepoContent repoName={params.repo} />
    </ReadmeProvider>
  );
}
