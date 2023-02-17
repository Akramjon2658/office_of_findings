export const setAccessTokenToLocalStorage = (value) => {
    localStorage.setItem('access_token', value)
}

export const getAccessTokenFromLocalStorage = () => {
    return localStorage.getItem('access_token')
}

export const setRefreshTokenToLocalStorage = (value) => {
    localStorage.setItem('refresh_token', value)
}

export const getRefreshTokenFromLocalStorage = () => {
    return localStorage.getItem('refresh_token')
}