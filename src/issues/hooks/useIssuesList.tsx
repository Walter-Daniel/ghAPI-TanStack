import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi"
import { Issue } from "../interfaces/issues"

const getIssues = async():Promise<Issue[]> => {
    const { data } =  await githubApi.get<Issue[]>('/issues');
    return data    
}

export const useIssuesList = () => {
  
    const issuesQuery = useQuery(
        ['issues'],
        getIssues
    )

    return {
        issuesQuery
    }

}
