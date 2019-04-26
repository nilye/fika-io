<template>
	<div class="hero">

		<div class="hero-container flex-center">
			<!--google login-->
			<!--<button class="btn log-in" @click="login"> Login </button>-->

			<div class="home-col">

				<div class="d-block flex-align-center">
					<fika-icon></fika-icon>
					<fika-title height="48px" class="ml-3"></fika-title>
				</div>
				<div class="hero-slogan mt-4">
					A delightful reading <br> experience for Chrome
				</div>

				<a class="btn pri add-to-chrome" href="https://chrome.google.com/webstore/detail/fika-reader-mode/fbcdnjeoghampomjjaahjgjghdjdbbcj" target="_blank">
					<chrome-icon class="chrome-icon"></chrome-icon>
					<span class="ml-2" style="flex:1">Add to Chrome</span>
				</a>
			</div>
		</div>

		<div class="hero-bg no-event">
			<div class="hero-splash" ref="splash">
				<div v-for="i in imgs" :class="i[0]" :style="{left:i[2], top:i[3]}">
					<img :class="i[1]" :src="require('../../assets/img/hero/'+i[0]+'.png')">
				</div>
				<img class="bg" src="../../assets/img/hero-bg.png">

			</div>
		</div>
	</div>
</template>

<script>
	import ChromeIcon from '../../assets/svg/chrome.svg'
	import FikaIcon from '../../assets/svg/logo.svg'
	import FikaTitle from '../../assets/svg/title.svg'
	export default {
		name: 'home-hero',
		components:{ ChromeIcon, FikaIcon, FikaTitle },
		data:()=>({
			imgs:[
				['shakespeare', 'wander-2', '60%', '16%'],
				['BB8', 'wander-1', '72%', '58%'],
				['uranus', 'wander-4', '80%', '30%'],
				['plant', 'wander-3', '57%', '38%'],
				['DNA', 'wander-2', '38%', '32%'],
				['probe', 'wander-1', '87%', '52%'],
			]
		}),
		created(){
			window.addEventListener('resize', this.ratio)
		},
		mounted(){
			this.ratio()
		},
		methods:{
			ratio(){
				let el = this.$refs.splash,
					h = el.offsetHeight,
					ratio = h/1341
				el.childNodes.forEach(i=>{
					if (i.classList[0] !== 'bg'){
						i.style.transform = `scale(${ratio})`
					}
				})
			},
			login(){
				this.$gAuth.signIn().then(GoogleUser =>{
					console.log(GoogleUser.getId(), GoogleUser.getBasicProfile())
				}).catch(err=>{
					console.log(err)
				})
			}
		}
	}
</script>