import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Issue } from "../interfaces/issues";


const getIssueInfo = async(issueNumber:number):Promise<Issue> => {

    const { data } =  await githubApi.get<Issue>(`/issues/${ issueNumber }`)
    console.log(data)
    return data

}

const getIssueComments = async(issueNumber:number):Promise<Issue[]> => {

    const { data } =  await githubApi.get<Issue[]>(`/issues/${ issueNumber }/comments`)
    console.log(data)
    return data

}

export const useIssue = (issueNumber: number) => {

    const issueQuery = useQuery(
        ['issue', issueNumber],
        () => getIssueInfo(issueNumber)
    );
    const commentsQuery = useQuery(
        ['issue', issueNumber, 'comments'],
        () => getIssueComments(issueQuery.data!.number),
        {
            enabled: issueQuery.data !== undefined
        }
    );

  return {
    issueQuery,
    commentsQuery
  }
}
