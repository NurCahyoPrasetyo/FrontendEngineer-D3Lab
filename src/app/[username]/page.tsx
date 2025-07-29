"use client";

import "@/styles/username.css";

import ProfileContent from "@/components/ProfileContent";
import { GitHubProvider } from "@/context/GitHubContext";

type UserPageProps = {
  params: { username: string };
};

export default function UserPage({ params }: UserPageProps) {
  return (
    <GitHubProvider username={params.username}>
      <ProfileContent />
    </GitHubProvider>
  );
}
