<template>
	<div class="return-tip">
		<div class="left" @tap="goBack">
			<image src="../../static/icons/left-arrow.svg" alt=""></image>
		</div>
		<div class="right">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	
	methods:{
		goBack(){
			uni.navigateBack({
				delta: 1
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.return-tip {
	display: flex;
	justify-content: space-between;
	padding: 28upx 30upx;
	.left {
		image {
			width: 40upx;
			height: 40upx;
		}
	}
	.right {
		span {
			font-size: 30upx;
			font-weight: 600;
		}
	}
}
</style>
