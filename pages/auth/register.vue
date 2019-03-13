<template>
	<div class="register-page">
		<top-nav>
			<span @tap="goLoginPage">登录</span>
		</top-nav>
		
		<div class="content-container">
			<p class="title">注册</p>
			<input-item class="input-group" label="手机号码" :active="active.telephone">
				<input type="number" 
				 :focus="true"  :maxlength="11" :step="1" placeholder="请输入手机号"
				 @focus="isFocus('telephone')" 
				 v-model="telephone"
				 />
			</input-item>
			<input-captcha class="input-item" label="验证码" :active="active.captcha" :active-btn="activeCaptchaBtn"  :telephone="telephone" channel="register">
				<input type="number"
				:maxlength="6"  placeholder="6位验证码"
				 @focus="isFocus('captcha')" 
				 v-model="captcha"
				/>
			</input-captcha>
			<input-password class="input-item" label="密码" :active="active.password" :showPasswrod="showPassword"  @handleTap="handelPasswrodIconTap">
				<input type="text" :password="!showPassword"
				:maxlength="30" placeholder="请输入密码(不少于6位)"
				 @focus="isFocus('password')" 
				 v-model="password"
				/>
			</input-password>
			
			<big-button class="reigster-btn" :active="activeRegisterBtn" @handleClick="register">注册</big-button>
		</div>
	</div>
</template>

<script>
// == components ==
import topNav from "@/components/topNav.vue"
import InputItem from "./components/InputItem.vue"
import InputCaptcha from "./components/InputCaptcha.vue"
import InputPassword from "./components/InputPassword.vue"
import BigButton from "./components/BigButton.vue"


export default {
	components:{topNav, InputItem, InputCaptcha, InputPassword, BigButton},
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
		}
		
	},
	
	onReady() {
	},
	
	
	computed:{
		activeRegisterBtn() {
			if (this.telephone.length == 11 && this.password.length >= 6 && this.captcha.length == 6) {
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
		register() {
			if (!this.activeRegisterBtn) {
				return false
			}
			
			// 注册
			var params = {
				telephone: this.telephone,
				password: this.password,
				captcha: this.captcha
			}
			
			
			this.$store.dispatch('register', params).then((res) => {
				// 跳转到页面
				
			}).catch((error) => {
				uni.showToast({
					title: error.data.message,
					icon: 'none',
					duration: 3000,
				})
			})
			
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
		
		goLoginPage() {
			// 
			uni.navigateTo({
				url: '/pages/auth/login'
			});
		}
		
	}
}
</script>

<style lang="scss" scoped>
.register-page {	
	.content-container {
		margin: 0 60upx;
		.title {
			font-size: 50upx;
			font-weight: bold;
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
