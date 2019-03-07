<template>
	<div class="index-page">
		<product-list></product-list>
	</div>
</template>

<script>
import ProductList from '@/components/productList/ProductList.vue'

export default {
	components:{ ProductList},
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
