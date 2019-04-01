<template>
	<div class="pricing">
		<h1>Get more from Fika</h1>
		<div class="pricing-cont">
			<!--free-->
			<div class="pricing-tile mr-2">
				<div class="title">Free</div>
				<div class="price flex-center">
					<div class="price-num ml-2">0</div>
				</div>
				<div class="my-4 items">
					<div class="my-1" v-for="i in services.free">
						{{i}}
					</div>
				</div>
				<button class="btn pri my-2">Try now</button>
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
				<button class="btn pri my-2">Subscribe</button>
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
					'4 Themes, 6 Fonts'
				],
				premium:[
					'Basic reader mode',
					'Auto TOC',
					'12 Themes, 10 Fonts',
					'Inspiring photo background',
					'Auto pilot',
					'Send to kindle'
				]
			}
		})
	}
</script>

<style scoped>

</style>