import axios from "axios";

export const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})