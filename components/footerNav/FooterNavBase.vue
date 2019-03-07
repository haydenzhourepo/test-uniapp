<template>
	<div class="footer-nav-base">
		<div class="footer-wraper">
			<slot></slot>
		</div>
	</div>
</template>
，
<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.footer-nav-base {
	width: 100%;
	height: 96upx;
	position: fixed;
	bottom: 0;

	background:rgba(255,255,255,0.82);
	box-shadow:0px -4px 10px 0px rgba(204,204,204,0.2);
	.footer-wraper {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		padding: 17upx 0 8upx 0;
	}
}
</style>
