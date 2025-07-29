"use client";

import RepoList from "@/components/RepoList";
import { useGitHub } from "@/context/GitHubContext";
import ErrorMessage from "./ui/ErrorMessage";
import Loading from "./ui/Loading";

export default function ProfileContent() {
  const { profile, repos, loading } = useGitHub();

  if (loading) return <Loading />;
  if (!profile) return <ErrorMessage message="Profile not found." />;

  return (
    <main className="profile-container">
      <div className="profile-header">
        <img src={profile.avatar_url} alt="avatar" className="avatar" />
        <div className="profile-info">
          <h1 className="profile-name">{profile.name || profile.login}</h1>
          {profile.bio && <p className="profile-bio">{profile.bio}</p>}
          <p className="profile-stats">
            <span>👥 {profile.followers} followers</span>
            <span>•</span>
            <span>Following {profile.following}</span>
          </p>
        </div>
      </div>
      <hr className="divider" />
      {repos && <RepoList username={profile.login} repos={repos} />}
    </main>
  );
}
