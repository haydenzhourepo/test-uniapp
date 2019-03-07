import request from '@/utils/request.js'


export const GetCaptcha = ({telephone, channel}) => {
	return request.get('/consumer/auth/captcha', {telephone, channel})
}

export const Register = ({telephone, password, captcha}) => {
	return request.post('/consumer/auth/register', {telephone, password, captcha})
}

export const Login = ({telephone, password, captcha}) => {
	return request.post('/consumer/auth/login', {telephone, password, captcha})
}

