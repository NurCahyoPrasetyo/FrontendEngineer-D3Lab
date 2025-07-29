"use client";

import "@/styles/username.css";

import ProfileContent from "@/components/ProfileContent";
import { GitHubProvider } from "@/context/GitHubContext";
import { useParams } from "next/navigation";

export default function UserPage() {
  const params = useParams();
  const username = params?.username as string;

  return (
    <GitHubProvider username={username}>
      <ProfileContent />
    </GitHubProvider>
  );
}
