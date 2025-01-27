import { axiosInstance } from "@/libs/axios";


export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
}

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile> {
  try {
    const response = await axiosInstance.get(`https://api.github.com/users/${username}`);
    return response.data as GitHubProfile;
  } catch (error: any) {
    console.error("Erro ao buscar perfil do GitHub", error.message || error);
    throw new Error(
      error.response?.data?.message || "Erro inesperado ao buscar o perfil do GitHub."
    );
  }
}
