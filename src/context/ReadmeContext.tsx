"use client";

import { getRepoReadme } from "@/services/github";
import { createContext, useContext, useEffect, useState } from "react";

type ReadmeContextType = {
  readme: string | null;
  loading: boolean;
};

const ReadmeContext = createContext<ReadmeContextType>({
  readme: null,
  loading: true,
});

export const useReadme = () => useContext(ReadmeContext);

export const ReadmeProvider = ({
  username,
  repo,
  children,
}: {
  username: string;
  repo: string;
  children: React.ReactNode;
}) => {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      setLoading(true);
      const content = await getRepoReadme(username, repo);
      setReadme(content);
      setLoading(false);
    };

    if (username && repo) fetchReadme();
  }, [username, repo]);

  return (
    <ReadmeContext.Provider value={{ readme, loading }}>
      {children}
    </ReadmeContext.Provider>
  );
};
