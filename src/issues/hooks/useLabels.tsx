import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubApi";
import { Label } from "../interfaces/label";

const getLabels = async():Promise<Label[]> => {
    const { data } = await githubApi.get<Label[]>('/labels')
    return data
}

export const useLabels = () => {
    const labelQuery = useQuery(
        ['labels'],
        getLabels,
        {
            staleTime: 1000 * 60 * 60,
            // initialData
            placeholderData: [
                {
                    id: 739761016,
                    node_id: "MDU6TGFiZWw3Mzk3NjEwMTY=",
                    url: "https://api.github.com/repos/facebook/react/labels/Component:%20Reconciler",
                    name: "Component: Reconciler",
                    color: "f9a798",
                    default: false
                },
                {   id: 52079258,
                    node_id: "MDU6TGFiZWw1MjA3OTI1OA==",
                    url: "https://api.github.com/repos/facebook/react/labels/Difficulty:%20starter",
                    name: "Difficulty: starter",
                    color: "94ce52",
                    default: false
                }
            ]
        }
      )
    
    return labelQuery
}