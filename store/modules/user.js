import { getToken, setToken, removeToken } from '@/utils/auth'
import { Register } from '@/api/auth'

const user = {
	state: {
		token: getToken(),
		nick_name: '',
		telephone:'',
		avatar: '',
		sex: 0,
	},
	
	mutations: {
		SET_TOKEN: (state, token) => {
		  state.token = token
		},
		SET_NICKNAME: (state, name) => {
		  state.nick_name = name
		},
		SET_AVATAR: (state, avatar) => {
		  state.avatar = avatar
		},
		SET_TELEPHONE: (state, telephone) => {
		  state.telephone = telephone
		},
		SET_SEX: (state, sex) => {
		  state.sex = sex
		}
	},
	
	actions: {
		// register
		register({ commit }, {telephone, password, captcha}) {
			return new Promise((resolve, reject) => {
				Register({telephone, password, captcha}).then((response) => {
					const data = response.data
					setToken(data.access_token)
					
					commit('SET_TOKEN', data.access_token)
					commit('SET_NICKNAME', data.user_info.nick_name)
					commit('SET_AVATAR', data.user_info.avatar)
					commit('SET_TELEPHONE', data.user_info.telephone)
					commit('SET_SEX', data.user_info.sex)
					
					
					resolve()
				}).catch((error) => {
					reject(error)
				})
			})
		},
		// 登录
		Login({ commit }, userInfo) {
		  const username = userInfo.username.trim()
		  return new Promise((resolve, reject) => {
			login(username, userInfo.password).then(response => {
			  const data = response.data
			  setToken(data.token)
			  commit('SET_TOKEN', data.token)
			  resolve()
			}).catch(error => {
			  reject(error)
			})
		  })
		},

		// 获取用户信息
		GetInfo({ commit, state }) {
		  return new Promise((resolve, reject) => {
			getInfo(state.token).then(response => {
			  const data = response.data
			  if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
				commit('SET_ROLES', data.roles)
			  } else {
				reject('getInfo: roles must be a non-null array !')
			  }
			  commit('SET_NAME', data.name)
			  commit('SET_AVATAR', data.avatar)
			  resolve(response)
			}).catch(error => {
			  reject(error)
			})
		  })
		},

		// 登出
		LogOut({ commit, state }) {
		  return new Promise((resolve, reject) => {
			logout(state.token).then(() => {
			  commit('SET_TOKEN', '')
			  commit('SET_ROLES', [])
			  removeToken()
			  resolve()
			}).catch(error => {
			  reject(error)
			})
		  })
		},

		// 前端 登出
		FedLogOut({ commit }) {
		  return new Promise(resolve => {
			commit('SET_TOKEN', '')
			removeToken()
			resolve()
		  })
		}
	  }
	
}

export default user