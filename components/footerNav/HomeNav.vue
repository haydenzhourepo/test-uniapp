<template>
	<view class="home-nav">
		<view class="footer-wraper">
			<view class="nav-item" v-for="(item, index) in navLists" :key="index" @tap="goGo(item.path)">
				<view class="img">
					<image :src="item.path == currentPath ? item.imgActive : item.img" alt=""></image>
				</view>
				<view class="text">
					<text :class="item.path == currentPath ? 'active' : '' ">{{ item.text }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import FooterNavBase from '@/components/footerNav/FooterNavBase.vue'
export default {
	components:{FooterNavBase},
	data() {
		return {
			navLists:[
				{
					img: require('@/static/icons/main-tarbar/home.png'),
					imgActive: require('@/static/icons/main-tarbar/home-active.png'),
					path: 'pages/index/index',
					text: '首页',
				},
				{
					img: require('@/static/icons/main-tarbar/category.png'),
					imgActive: require('@/static/icons/main-tarbar/category-active.png'),
					path: 'pages/category/index',
					text: '商品分类'
				},
				{
					img: require('@/static/icons/main-tarbar/cart.png'),
					imgActive: require('@/static/icons/main-tarbar/cart-active.png'),
					path: 'pages/cart/index',
					text: '购物车'
				},
				{
					img: require('@/static/icons/main-tarbar/profile.png'),
					imgActive: require('@/static/icons/main-tarbar/profile-active.png'),
					path: 'pages/profile/index',
					text: '我的'
				}
				
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
	width: 100%;
	height: 96upx;
	position: fixed;
	bottom: 0;
	background:rgba(255,255,255,0.95);
	box-shadow:0px -4px 10px 0px rgba(204,204,204,0.2);
	.footer-wraper {
		display: flex;
		justify-content: space-around;
		height: 100%;
		padding: 17upx 0 8upx 0;
		
		.nav-item {
			flex: 1;
			text-align: center;
			color: #999999;
			.img {
				width: 44upx;
				height: 44upx;
				margin: auto;
				image {
					width: 44upx;
					height: 44upx;
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
	
}
</style>
