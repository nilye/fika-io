<template>
	<div class="text-center" style="background: #f5f5f5">
		<h1>Comparison</h1>
		<table class="comparison">
			<colgroup>
				<col width="29%">
				<col width="23%">
				<col width="23%">
				<col width="25%">
			</colgroup>
			<thead>
				<th>Features</th>
				<th>
					<div class="flex-justify-center">
						<fika-icon class="mr-1" height="24px" width="24px"></fika-icon>
						Fika
					</div>
				</th>
				<th>
					<div class="flex-justify-center">
						<img class="mr-1" height="24px" src="https://lh3.googleusercontent.com/HtdAnUqubk0-CAqygJxjSWbKYYrhEMNXStYb56op6CRSTNq_yB_lx1d4aKAmbMTHn5BPVuNXuA=w128-h128-e365">
						Mercury
					</div>
				</th>
				<th>
					<div class="flex-justify-center">
						<img class="mr-1" height="24px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/128px-Safari_browser_logo.svg.png">
						Safari Reader
					</div>
				</th>
			</thead>
			<tbody>
				<tr v-for="row in features">
					<td>{{row[0]}}</td>
					<td v-for="m in row.slice(1,4)">
						<check-icon fill="#28a745" v-if="m === 1"></check-icon>
						<span v-else>-</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import FikaIcon from '../../assets/svg/logo.svg'
	import CheckIcon from '../../assets/svg/check.svg'
	export default {
		name: 'comparison',
		components: {FikaIcon, CheckIcon},
		data: ()=>({
			features:[
				// features fika mercury safari
				['Reader mode', 1, 1, 1],
				['Text adjustment', 1, 1, 1],
				['Multi-language font', 1, 0, 1],
				['Rich themes & colors', 1, 2, 2],
				['Table of content', 1, 0, 0],
				['Photo background', 1, 0, 0],
				['Autopilot whitelist', 1, 0, 1]
			]
		}),
		methods:{
			mark(num){
				console.log(require('../../assets/svg/check.svg'))
				if (num === 1) return require('../../assets/svg/check.svg')
				else return '-'
			}
		}
	}
</script>

<style scoped>

</style>