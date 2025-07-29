"use client";

import { getUserProfile, getUserRepos } from "@/services/github";
import type { GitHubProfile, GitHubRepo } from "@/types/github";
import React, { createContext, useContext, useEffect, useState } from "react";

type GitHubContextType = {
  profile: GitHubProfile | null;
  repos: GitHubRepo[] | null;
  loading: boolean;
};

const GitHubContext = createContext<GitHubContextType>({
  profile: null,
  repos: null,
  loading: true,
});

export const useGitHub = () => useContext(GitHubContext);

export const GitHubProvider = ({
  username,
  children,
}: {
  username: string;
  children: React.ReactNode;
}) => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [profileData, reposData] = await Promise.all([
        getUserProfile(username),
        getUserRepos(username),
      ]);
      setProfile(profileData);
      setRepos(reposData);
      setLoading(false);
    };

    if (username) fetchData();
  }, [username]);

  return (
    <GitHubContext.Provider value={{ profile, repos, loading }}>
      {children}
    </GitHubContext.Provider>
  );
};
