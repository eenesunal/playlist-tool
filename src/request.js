const API = "https://api.spotify.com/v1/"

const ACCESS_TOKEN = "BQChwtQx4K_etqRk_xNX1hLqObfm81y4H-OUI8V2viEWFFNRy6mr1Ce1at4GxxMrLC98oLubqAVLcEDpT9aDInRsyzHxKjxCmroSFI0qW4cgYHnfaebjkzU1wXBgLP0OBJtPcPWW1vVgZUuNCvhyqS1oYeA6Yr0GAIHC0A"

export const getJSON = (request) => {
    return new Promise((resolve, reject) => {
        request.method = "GET"
        doRequest(request).then((response) => {
            response.json().then(resolve).catch(reject)
        }).catch(reject)
    })
}

export const doRequest = (request) => {
    if (!request.headers) {
        request.headers = {}
    }
    if (request.method !== "GET" && !request.headers.hasOwnProperty("Content-Type")) {
        request.headers["Content-Type"] = "application/x-www-form-urlencoded"
        request.body = encodeParameters(request.body)
    }
    if (!request.headers.hasOwnProperty("Accept")) {
        request.headers["Accept"] = "application/json"
    }
    if (!request.headers.hasOwnProperty("Authorization") && ACCESS_TOKEN) {
        request.headers["Authorization"] = `Bearer ${ACCESS_TOKEN}`
    }

    return new Promise((resolve, reject) => {
        if (request) {
            // search?q=%22doom%20metal%22&type=playlist"
            let query = request.q ? 'q=' + request.query : ""
            let type = "&type=playlist";

            let params = query + type

            const url = `${API + request.url}?${params}`

            fetch(new Request(url, request)).then((response) => {
                response.traceId = response.headers.get("x-trace-id")
                if (response.status < 400) {
                    return resolve(response)
                }
                return reject(response)
            }).catch((response) => {
                if (response.headers) {
                    response.traceId = response.headers.get("x-trace-id")
                }
                return reject(response)
            })
        }
    })
}

const encodeParameters = (params) => {
    const formBody = []
    for (const property in params) {
        const encodedKey = encodeURIComponent(property)
        const encodedValue = encodeURIComponent(params[property])
        formBody.push(`${encodedKey}=${encodedValue}`)
    }
    return `${formBody.join("&")}`
}