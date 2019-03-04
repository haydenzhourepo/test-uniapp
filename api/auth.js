import request from '@/utils/request.js'


export const GetCaptcha = ({telephone}) => {
	return request.get('/consumer/auth/captcha', {telephone})
}

export const Register = ({telephone, password, captcha}) => {
	return request.post('/consumer/auth/register', {telephone, password, captcha})
}

