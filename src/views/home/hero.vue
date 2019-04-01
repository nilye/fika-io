<template>
	<div class="hero">

		<div class="hero-container flex-center">
			<!--google login-->
			<button class="btn log-in" @click="login"> Login </button>

			<div class="home-main">

				<div class="d-block flex-x-center">
					<fika-icon class="hero-fika-logo"></fika-icon>
					<div class="hero-brand ml-2 d-inline">Fika</div>
				</div>
				<div class="hero-slogan mt-4">
					A Kindle-like reading <br> experience for Chrome
				</div>

				<button class="btn pri add-to-chrome">
					<chrome-icon class="chrome-icon"></chrome-icon>
					<span style="flex:1">Add to Chrome</span>
				</button>
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
	import FikaIcon from '../../assets/svg/fika.svg'
	export default {
		name: 'home-hero',
		components:{ ChromeIcon, FikaIcon },
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
				console.log(el.offsetHeight, h, el.childNodes, ratio)
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