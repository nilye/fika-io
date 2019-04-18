<template>
	<div class="d-flex flex-center" style="height: 100vh">
		<div class="share-to-unlock-dialog flex-center">
			<div v-if="!granted" style="text-align: center">
				<check-icon height="96px" width="96px" fill="#28a745" viewBox="0 0 24 24"></check-icon>
				<h1>Your BETA access is granted!</h1>
				<p>Fika BETA features should be available to you now.</p>
				<div class="mt-5 d-flex flex-center">
					<img class="avatar" :src="user.avatar_url"/>
					<h3 class="ml-2">{{user.nickname}}</h3>
				</div>
			</div>
			<div v-else style="text-align: center">
				<div class="flex-center mb-8">
					<fika-icon class="hero-fika-logo"></fika-icon>
					<div class="hero-brand ml-2">Fika</div>
				</div>
				<h1>Share to gain BETA access</h1>
				<button class="btn pri mt-4"
				        style="background: #3A5CA9;font-size:18px"
				        @click="fbDialog">
					<facebook-icon fill="#fff"></facebook-icon>
					<span class="ml-1">Facebook&nbsp;</span>
				</button>
			</div>
		</div>
		<!--masonry-->
		<div class="photo-bg">
			<img v-for="i in photos" :src="i.small" class="ma-1"/>
		</div>
	</div>
</template>

<script>
	import qs from 'qs'
	import CheckIcon from '../assets/svg/check.svg'
	import FacebookIcon from '../assets/svg/facebook.svg'
	import Photos from '../util/photos';
	import FikaIcon from '../assets/svg/fika.svg'

	export default {
		name: 'sharetounlock',
		components:{CheckIcon, FacebookIcon, FikaIcon},
		data: ()=>({
			granted: false,
			user: {
				"nickname": "Xinzhou Ye",
				"avatar_url": "https://lh3.googleusercontent.com/-IvSppfPGUEE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdB3TiE6ywqpTjrxqtciyN2p5HHbQ/mo/photo.jpg",
			},
			photos: Photos
		}),
		created(){
			(function (d, s, id) {
				let js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return
				js = d.createElement(s);
				js.id = id;
				js.src = "https://connect.facebook.net/en_US/sdk.js"
				fjs.parentNode.insertBefore(js, fjs);
			})(document, 'script', 'facebook-sdk' )
			let that = this,
				token = this.$route.query['t']
			window.fbAsyncInit = function () {
				FB.init({
					appId: 393950891439557,
					status: true,
					xfbml: true,
					version: 'v3.2'
				})
			}
		},
		methods:{
			fbDialog(){
				let that = this
				FB.ui({
					method:'feed',
					link: 'https://chrome.google.com/webstore/detail/fika-reader-mode/fbcdnjeoghampomjjaahjgjghdjdbbcj'
				},function (response) {
					if (response){
						that.changeUserType()
					}
				})
			},
			changeUserType(){
				let token = this.$route.query['t'],
					data = qs.stringify({ token, user_type: 'beta' })
				this.axios.post('/user/info', data , {
					'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
				}).then(res=>{
					if (res.data.code === 0 || res.data.code === 1002){
						return this.axios.get('/user/info?token='+token)
					} else {
						return new Promise((_, reject)=> reject(res.data.code))
					}
				}).then(res=>{
					if (res.data.code === 0 && res.data.data.user_type === 'beta'){
						this.granted = true
						this.user = res.data.data
					}
				}).catch(err=>{})
			}
		}
	}
</script>

<style scoped>

</style>