import axios from "axios"
const API_KEY = "AIzaSyDPYReE9II8CX2-E0QXVbk_hV-q16iZsTQ"
const OAUTH_KEY = "378257028232-h4b9rapcokl1pgvbqa8ts0aekcf3r7nd.apps.googleusercontent.com"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        key: API_KEY,
        access_token: OAUTH_KEY,
        mine: true
    }
})