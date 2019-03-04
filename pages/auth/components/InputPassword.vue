<template>
	<div class="input-password">
		<input-item :label="label" :active="active">
			<slot></slot>
			<div class="password" slot="append" @tap="handleClick">
				<img v-if="!showPasswrod" src="@/static/icons/password-view.svg" alt="">
				<img v-if="showPasswrod" src="@/static/icons/password-not-view.svg" alt="">
			</div>
		</input-item>
	</div>
</template>

<script>
import InputItem from "./InputItem.vue"
export default {
	props:{
		label: {type:String, required:true}, //输入组的标题
		active: {type: [Boolean, Number], default: false} ,// 输入款激活状态
		showPasswrod: {type:[Boolean, Number], default: false}  // 是否显示密码
	},
	components:{InputItem},
	data() {
		return {
			
		}
	},
	
	methods:{
		handleClick(){
			console.log('ci')
			this.$emit('handleTap')
		}
	}
}
</script>

<style lang="scss" scoped>
.input-password {
	.password {
		height: 100upx;
		line-height: 100upx;
		margin-left: 35upx;
		text-align: center;
		img {
			width: 32upx;
			height: 30upx;
		}
	}
}
</style>
