import axios from "axios"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        key: API_KEY,
        access_token: OAUTH_KEY,
        mine: true
    }
})