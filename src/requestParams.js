let requestParams = {}

export const setter = function(key, value) {
    requestParams[key] = value

    return requestParams
}

export const getter = function(key) {
    return requestParams[key]
}