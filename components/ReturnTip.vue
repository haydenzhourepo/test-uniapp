<template>
	<div class="return-tip">
		<div class="left">
			<img src="@/static/icons/left-arrow.svg" alt="">
		</div>
		<div class="right">
			<slot></slot>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.return-tip {
	display: flex;
	justify-content: space-between;
	padding: 28upx 30upx;
	.left {
		img {
			width: 45upx;
			height: 45upx;
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
