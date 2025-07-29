"use client";
import "@/styles/homepage.css"; // pastikan ini diimport
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <main className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">🔍 GitHub Repo Explorer</h1>
        <p className="homepage-description">
          Find any GitHub user&apos;s public repositories.
        </p>
        <form onSubmit={handleSubmit} className="homepage-form">
          <input
            type="text"
            placeholder="Enter GitHub username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="homepage-input"
          />
          <button type="submit" className="homepage-button">
            Search
          </button>
        </form>
      </div>
    </main>
  );
}
