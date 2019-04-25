<template>
	<div class="footer">
		<div class="home-col">
			<div class="flex-center">
				<a target="_blank" class="flex-align-center" href="https://www.producthunt.com/posts/fika-5">
					<product-hunt-icon width="24" height="24" class="mr-1"></product-hunt-icon>
					Product Hunt
				</a>
				<a target="_blank" href="https://twitter.com/FikaReader" class="flex-align-center ml-5">
					<twitter-icon height="32" width="32" fill="#00a2eb" class="mr-1"></twitter-icon>
					Twitter</a>
				<a href="/updatelog" class="ml-5">Update Log</a>
			</div>
			<div style="text-align: center;opacity: 0.5" class="mt-4">© Fika</div>
		</div>
	</div>
</template>

<script>
	import TwitterIcon from '../../assets/svg/twitter.svg'
	import ProductHuntIcon from '../../assets/svg/producthunt.svg'
	export default {
		name: 'home-footer',
		components: {TwitterIcon, ProductHuntIcon}
	}
</script>

<style scoped>

</style>