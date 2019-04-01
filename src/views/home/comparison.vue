<template>
	<div class="comparison">
		<div class="home-main py-8">
			<h1 style="color: white">Before & After</h1>
			<div class="comparison-cont"
			     @mouseleave="hover($event)"
			     @mouseenter="hover($event)"
			     @mousemove="hover($event)">
				<div class="comparison-before"
				     :style="{width:contWidth+'px'}">
					<img src="../../assets/img/comparison-before.png" />
				</div>
				<img class="comparison-after" src="../../assets/img/comparison-after.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'comparison',
		data: ()=>({
			contWidth: 0
		}),
		methods:{
			hover(e){
				let contLeft = e.target.getBoundingClientRect().left,
					mouseLeft = e.pageX,
					contWidth = mouseLeft-contLeft
				this.contWidth = contWidth < 0 ? 0 : contWidth
				console.log(e.target.getBoundingClientRect(), e.pageX)

			}
		}
	}
</script>
