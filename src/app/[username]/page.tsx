"use client";

import ProfileContent from "@/components/ProfileContent";
import { GitHubProvider } from "@/context/GitHubContext";
import "@/styles/username.css";

export default function UserPage({ params }: { params: { username: string } }) {
  return (
    <GitHubProvider username={params.username}>
      <ProfileContent />
    </GitHubProvider>
  );
}
