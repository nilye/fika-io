<template>
	<div>
		<div class="bg-pale py-5">
			<div class="home-col home-col-small flex-align-center">
				<fika-icon></fika-icon>
				<h1 class="ma-0 ml-3 color-text-d">Fika Update Log</h1>
			</div>
		</div>
		<div class="home-col home-col-small" >
			<div class="my-6" v-for="(items, version) in updateLogs">
				<h2>{{version}}</h2>
				<h4 v-for="i in items">{{i}}</h4>
			</div>
		</div>
	</div>
</template>

<script>
	import FikaIcon from '../assets/svg/logo.svg'

	export default {
		name: 'updatelog',
		components:{FikaIcon},
		data: ()=>({
			updateLogs: {
				"v0.6.0 (What's new)": [
					'User authentication',
					'Photo & color background',
					'Autopilot mode'
				],
				'v0.5.0': [
					'Highlight code syntax',
					'More legible text colors in Vanilla & Licorice theme'
				],
				'v0.4.0': [
					'Fix a bug that the HTML is being rendered in Code elements',
					'Articles opened in Fika can share to twitter and facebook',
					'TOC item will be highlighted while scrolling',
					'Fika toggle is available in Chrome default right click menu',
				],
				'v0.3.0': [
					'Advanced compatibility',
					'Refined article styling',
					'Trimmed and lighter table of content',
					'New Layout',
					'Feedback collection',
					'Fullscreen mode'
				],
				'v0.2.0': [
					'More font selections',
					'New badge status',
					'Shortcut: Alt+R (Option+R): to open Fika, Esc: to close'
				],
				'v0.1.0': [
					'Initial release',
					'Four delightful themes, several font and three text size options',
					'Auto-generated table of content'
				]
			},
		})
	}
</script>

<style scoped>

</style>