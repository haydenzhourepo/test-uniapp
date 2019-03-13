<template>
	<div class="index-page">
		<product-list></product-list>

       <home-nav></home-nav>
	</div>
</template>

<script>
import HomeNav from '@/components/footerNav/HomeNav.vue'
import ProductList from '@/components/productList/ProductList.vue'

export default {
	components:{HomeNav, ProductList},
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style lang="scss" scoped>
.index-page {
	
}	
</style>
