<template>
	<div class="bg-sec">
		<h1 class="color-white">Get more from Fika</h1>
		<div class="pricing-cont home-col">
			<!--free-->
			<div class="pricing-tile bg-white mr-2">
				<div class="title">Free</div>
				<div class="price flex-center">
					<div class="price-num ml-2">0</div>
				</div>
				<div class="my-4 items">
					<div class="my-1" v-for="i in services.free">
						{{i}}
					</div>
				</div>
				<a class="btn pri my-2" href="https://chrome.google.com/webstore/detail/fika-reader-mode/fbcdnjeoghampomjjaahjgjghdjdbbcj" target="_blank">Try now</a>
			</div>
			<!--premium-->
			<div class="pricing-tile pricing-tile-premium">
				<div class="title">Premium</div>
				<div class="price flex-center">
					FROM<div class="price-num ml-2">2.99</div>
				</div>
				<div class="my-4 items">
					<div class="my-1" v-for="i in services.premium">
						{{i}}
					</div>
				</div>
				<button class="btn pri my-2" disabled>Coming Soon</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'pricing',
		data:()=>({
			services:{
				free:[
					'Basic reader mode',
					'Auto TOC',
					'Fonts',
					'Themes'
				],
				premium:[
					'Basic reader mode',
					'Auto TOC',
					'Fonts',
					'Themes',
					'Color background',
					'Photo background',
					'Auto pilot',
					'Send to kindle'
				]
			}
		})
	}
</script>

<style scoped>

</style>