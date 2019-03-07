<template>
	<div class="home-nav">
		<footer-nav-base>
			<div class="nav-item" v-for="(item, index) in navLists" :key="index" @tap="goGo(item.path)">
				<div class="img">
					<image :src="item.path == currentPath ? item.imgActive : item.img" alt=""></image>
				</div>
				<div class="text">
					<span :class="item.path == currentPath ? 'active' : '' ">{{ item.text }}</span>
				</div>
			</div>
		</footer-nav-base>
	</div>
</template>

<script>
import FooterNavBase from '@/components/footerNav/FooterNavBase.vue'
export default {
	components:{FooterNavBase},
	data() {
		return {
			navLists:[
// 				{
// 					img: require('@/static/icons/home.svg'),
// 					imgActive: require('@/static/icons/home-active.svg'),
// 					path: 'pages/index/index',
// 					text: '首页',
// 				},
// 				{
// 					img: require('@/static/icons/category.svg'),
// 					imgActive: require('@/static/icons/category-active.svg'),
// 					path: 'pages/category/index',
// 					text: '商品分类'
// 				},
// 				{
// 					img: require('@/static/icons/cart.svg'),
// 					imgActive: require('@/static/icons/cart-active.svg'),
// 					path: 'pages/cart/index',
// 					text: '购物车'
// 				},
// 				{
// 					img: require('@/static/icons/profile.svg'),
// 					imgActive: require('@/static/icons/profile-active.svg'),
// 					path: 'pages/profile/index',
// 					text: '我的'
// 				}
				
			],
			
			currentPath:'/pages/index/index'
		}
	},
	
	mounted(){
		this.currentPath = getCurrentPages().pop().route
	},
	
	methods:{
		goGo(path) {
			uni.navigateTo({
				url: '/' + path
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.home-nav {
	.nav-item {
		flex: 1;
		text-align: center;
		color: #999999;
		.img {
			width: 44upx;
			height: 44upx;
			margin: auto;
			img {
				width: 100%;
			}
		}
		
		.text {
			font-size: 20upx;
			span.active {
				color: $uni-text-color-green;
			}
		}
	}
}
</style>
