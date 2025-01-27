import { fetchGitHubProfile, GitHubProfile } from "@/hooks/get-github-profile"
import { useQuery } from "@tanstack/react-query"
import { QUERYKEYS } from "./query-is"

export const useGetProfileGithub = () => {
    return useQuery<GitHubProfile> ({
        queryKey: [QUERYKEYS.getProfileGitHub],
        queryFn: () => fetchGitHubProfile("eduardonakaidev")
    })
}