<template>
	<div class="login-page">
		<return-tip>
			<span @tap="goRegisterPage">注册</span>
		</return-tip>
		
		<div class="content-container">
			<p class="title"> 
				<span @tap="changeLoginMethod('captcha')" :class="{active: isCaptchaLogin}">验证码登录</span> | 
				<span @tap="changeLoginMethod('password')" :class="{active: !isCaptchaLogin}">密码登录</span>
			</p>
			
			<input-item class="input-group" label="手机号码" :active="active.telephone">
				<input type="number" 
				 :focus="true"  :maxlength="11" :step="1" placeholder="请输入手机号"
				 @focus="isFocus('telephone')" 
				 v-model="telephone"
				 />
			</input-item>
			<input-captcha class="input-item" label="验证码" :active="active.captcha" :active-btn="activeCaptchaBtn"  :telephone="telephone" channel="login" v-if="isCaptchaLogin">
				<input type="number"
				:maxlength="6"  placeholder="6位验证码"
				 @focus="isFocus('captcha')" 
				 v-model="captcha"
				/>
			</input-captcha>
			<input-password class="input-item" label="密码" :active="active.password" :showPasswrod="showPassword"  @handleTap="handelPasswrodIconTap" v-if="!isCaptchaLogin">
				<input type="text" :password="!showPassword"
				:maxlength="30" placeholder="请输入密码"
				 @focus="isFocus('password')" 
				 v-model="password"
				/>
			</input-password>
			
			<big-button class="reigster-btn" :active="activeRegisterBtn" @handleClick="login">登录</big-button>
		</div>
	</div>
</template>

<script>
// == components ==
import ReturnTip from "@/components/ReturnTip.vue"
import InputItem from "./components/InputItem.vue"
import InputCaptcha from "./components/InputCaptcha.vue"
import InputPassword from "./components/InputPassword.vue"
import BigButton from "./components/BigButton.vue"


export default {
	components:{ReturnTip, InputItem, InputCaptcha, InputPassword, BigButton},
	data() {
		return {
			telephone:'',
			password:'',
			captcha:'',
			
			
			active:{
				telephone: true,
				captcha:false,
				password: false
			},
			
			showPassword: false,
			isCaptchaLogin: true
		}
		
	},
	
	onReady() {
	},
	
	
	computed:{
		activeRegisterBtn() {
			if (this.telephone.length == 11 && (this.password.length >= 6 || this.captcha.length == 6)) {
				 return true
			} 
			
			return false
		},
		activeCaptchaBtn() {
			if (this.telephone.length == 11) {
				 return true
			} 
			
			return false
		}
	},
	
	methods: {
		login() {
			if (!this.activeRegisterBtn) {
				return false
			}
			
			// 登录
			var params = {
				telephone: this.telephone,
				password: this.password,
				captcha: this.captcha
			}
			
			
			this.$store.dispatch('login', params).then((res) => {
				// 跳转到页面
				
			}).catch((error) => {
				uni.showToast({
					title: error.data.message,
					icon: 'none',
					duration: 3000,
				})
			})
			
		},
		changeLoginMethod(type) {
			if (type == 'captcha') {
				this.isCaptchaLogin = true
				this.password = ''
			}
			if (type == 'password') {
				this.isCaptchaLogin = false
				this.captcha = ''
			}
			
			
		},
		isFocus(type) {
			switch (type){
				case 'telephone': 
					this.active = {
						telephone: true,
						captcha:false,
						password: false
					}
				
					break;
				case 'captcha': 
					this.active = {
						telephone: false,
						captcha:true,
						password: false
					}
					break;
				case 'password': 
					this.active = {
						telephone: false,
						captcha:false,
						password: true
					}
					break;
				default:
					break;
			}
		},
		handelPasswrodIconTap(){
			this.showPassword = !this.showPassword
		},
		
		goRegisterPage() {
			// 
			uni.navigateTo({
				url: '/pages/auth/register'
			});
		}
		
	}
}
</script>

<style lang="scss" scoped>
.login-page {	
	.content-container {
		margin: 0 60upx;
		.title {
			font-size: 40upx;
			font-weight: bold;
			color: #BBBBBB;
			span{
				&.active {
					color: #1D1E22;
				}
				
				&:nth-child(1) {
					margin-right: 30upx;
				}
				
				&:nth-child(2) {
					margin-left: 30upx;
				}
				
			}
			
		}
		.input-item {
			margin-top: 60upx;
		}
		.reigster-btn {
			margin-top: 60upx;
		}
	}
	
}
</style>
