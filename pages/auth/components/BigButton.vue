<template>
	<div class="big-button" @tap="handleTap">
		<div :class="['btn-wraper', {'active': active}]">
			<text><slot></slot></text>
		</div>
	</div>
</template>

<script>

export default {
	props:{
		active: {type: [Boolean, Number], default: false}
	},
	data() {
		return {
			
		}
	},
	mounted() {
	},
	methods:{
		handleTap(){
			this.$emit('handleClick')
		}
	}
}
</script>

<style lang="scss" scoped>
.big-button {
	.btn-wraper{
		height:88upx;
		background:linear-gradient(45deg,rgba(103,189,25,1) 0%,rgba(181,232,97,1) 100%);
		border-radius:50px;
		opacity:0.5;
		display: flex;
		justify-content: center;
		align-items: center;
		&.active {
			opacity:1;
		}
		text {
			font-size: 36upx;
			font-weight:600;
			color:rgba(255,255,255,1);
		}
	}
}
</style>
