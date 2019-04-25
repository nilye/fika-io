<template>
	<div class="home-col text-center">
		<h1>Key Features</h1>
		<div class="swiper-cont">
			<swiper :options="swiperOption" style="border-radius: 16px" ref="swiper" @slideChange="slideChange">
				<swiper-slide v-for="(image, index) in images" :key="index">
					<img :src="imagePath(image)"/>
				</swiper-slide>
			</swiper>
			<button class="btn btn-icon swiper-btn swiper-prev-btn" slot="button-prev">
				<left-icon></left-icon>
			</button>
			<button class="btn btn-icon swiper-btn swiper-next-btn" slot="button-next">
				<right-icon></right-icon>
			</button>
		</div>
		<h2>{{headings[activeIndex]}}</h2>
	</div>
</template>

<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import LeftIcon from '../../assets/svg/left.svg'
	import RightIcon from '../../assets/svg/right.svg'

	export default {
		name: 'features',
		components:{swiper, swiperSlide, LeftIcon, RightIcon},
		data: ()=>({
			swiperOption:{
				loop: true,
				spaceBetween: 16,
				autoplay: true,
				navigation:{
					nextEl:'.swiper-next-btn',
					prevEl:'.swiper-prev-btn'
				}
			},
			images:['autopilot.png','font.png','photo.png','TOC.png'],
			headings:[
				'Automatically toggle on whitelisted websites',
				'Multi-language fonts',
				'Inspiring photo backgrounds',
				'Auto generated table of content'
			],
			activeIndex:0
		}),
		computed:{
			swiper(){
				return this.$refs.swiper.swiper
			}
		},
		mounted(){
			// this.slideChange()
		},
		methods:{
			slideChange(){
				console.log(this.swiper.realIndex)
				this.activeIndex = this.swiper.realIndex
			},
			imagePath(image){
				return require('../../assets/img/features/'+image)
			}
		}
	}
</script>

<style scoped>

</style>