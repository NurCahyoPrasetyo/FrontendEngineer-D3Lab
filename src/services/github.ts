export async function getUserProfile(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  return await res.json();
}

export async function getUserRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  return await res.json();
}

export async function getRepoReadme(username: string, repo: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/${username}/${repo}/main/README.md`
  );
  return await res.text();
}
