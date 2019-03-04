<template>
	<div class="input-item" >
		<div :class="['label', {'active': active}]">
			<p>{{ label }}</p>
		</div>
		<div class="input-box">
			<div class="input-wraper" :class="{'active': active}">
				<slot></slot>
			</div>
			<slot name="append"></slot>
			<div class="sep-line"></div>
		</div>
	</div>
</template>

<script>

export default {
	props:{
		label: {type:String, required:true},
		active: {type: [Boolean, Number], default: false}
	},
	data() {
		return {
			
		}
	},
	mounted() {
	},
	methods:{
		
	}
}
</script>

<style lang="scss" scoped>
.input-item {
	font-size: 28upx;
	font-weight: 500;
	
	.label {
		color: #999999;
		&.active {
			color: $uni-text-color-green;
		}
	}
	.input-box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100upx;
		
		.input-wraper {
			display: flex;
			align-items: center;
			height: 100upx;
			border-bottom: solid 1px #EEEEEE;
			flex: 1;
			
			&.active {
				border-bottom: solid 1px $uni-text-color-green;
			}
		}
		
	
		/deep/ .input-placeholder {
			color: #BBBBBB;
		}
	
	}
}
</style>
