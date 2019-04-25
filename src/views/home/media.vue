<template>
	<div class="home-col text-center" style="max-width: 720px">
		<h1>Media's Reviews</h1>
		<a v-for="i in eval" target="_blank" :href="i.link" class="d-inline-flex ma-2">
			<img :src="imagePath(i.img)" style="max-height: 48px;">
		</a>
	</div>
</template>

<script>
	export default {
		name: 'media',
		data: ()=>({
			eval:[
				{
					link:'https://www.softpedia.com/get/Internet/Internet-Applications-Addons/Chrome-Extensions/Fika.shtml',
					img:'softpedia.png'
				},{
					link:'https://mobile.twitter.com/webusermagazine/status/1116643535481131008',
					img:'webuser.png'
				},{
					link:'http://chromecj.com/accessibility/2019-03/1982.html',
					img:'chromecj.png'
				},{
					link:'https://trainghiemso.vn/fika',
					img:'trainghiem.png'
				},{
					link:'http://www.sohu.com/a/306496383_602994',
					img:'sohu.png'
				},{
					link:'https://lifehacker.ru/fika-chrome',
					img:'lifehacker.jpg'
				}
			]
		}),
		methods:{
			imagePath(img){
				return require('../../assets/img/media/'+img)
			}
		}
	}
</script>

<style scoped>

</style>