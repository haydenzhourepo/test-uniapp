<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
			console.log(process.env.VUE_APP_BASE_API)
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	body {
		margin: 0;
		padding: 0;
		font-family: PingFangSC-Semibold;
	}
</style>
