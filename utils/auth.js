const TokenKey = 'sxmall-token'

export const getToken = () => {
	return uni.getStorageSync(TokenKey)
}

export const setToken = (token) => {
	uni.setStorageSync(TokenKey, token)
}

export const removeToken = () => {
	uni.removeStorageSync(TokenKey)
}
