<template>
	<div class="input-captcha">
		<input-item :label="label" :active="active">
			<slot></slot>
			<div class="captcha" slot="append">
				<p v-if="!countDownSecs" :class="{ 'active': activeBtn}" @tap="getCaptcha">获取验证码</p>
				<p v-if="countDownSecs">重新发送 {{ countDownSecs }} 秒</p>
			</div>
		</input-item>
	</div>
</template>

<script>
import InputItem from "./InputItem.vue"

import { GetCaptcha } from "@/api/auth.js"
export default {
	props:{
		label: {type:String, required:true}, //输入组的标题
		active: {type: [Boolean, Number], default: false} ,// 输入款激活状态
		activeBtn: {type: [Boolean, Number], default: false} ,// 获取激活码按钮激活状态
		channel:{type: String, required:true}, // 获取验证码使用途径
		telephone: {type: [String, Number], default: ''}
	},
	
	components:{InputItem},
	data() {
		return {
			countDownSecs: 0
		}
	},
	
		
	onReady(){
		// this.activeBtn = true
	},
	
	methods:{
		getCaptcha() {
			if(!this.canGetCaptcha()) {
				uni.showToast({
					title: '请输入手机号',
					icon: 'none',
					duration: 3000
				});	
				
				return false;
			}
			
			GetCaptcha({telephone: this.telephone,channel: this.channel}).then((res) => {
				uni.showToast({
					title: res.message,
					icon: 'none',
					duration: 3000
				})
				this.countDownSecs = 60;
				this.countDown()
			}).catch((error) => {
				uni.showToast({
					title: error.data.message,
					icon: 'none',
					duration: 3000,
				})
			})
			
		},
		
		canGetCaptcha(){
			return this.activeBtn;
		},
		
		countDown(){
			var timer = setInterval(() => {
				this.countDownSecs--

				if(this.countDownSecs <= 0) {
					clearInterval(timer)
					this.countDownSecs = 0
				}
			}, 1000)
			
		}
	}
}
</script>

<style lang="scss" scoped>
.input-captcha {
	font-weight: 500;
	.captcha {
		width: 280upx;
		height: 100upx;
		line-height: 100upx;
		margin-left: 35upx;
		background:rgba(250,250,250,1);
		text-align: center;
		
		p {
			color: #999999;
			&.active {
				color: $uni-text-color-green;
			}
		}
		
	}
}
</style>
