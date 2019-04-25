<template>
	<div class="before-after">
		<div class="home-col">
			<h1 style="color: white">Before & After</h1>
			<div class="container"
			     @mouseleave="hover($event)"
			     @mouseenter="hover($event)"
			     @mousemove="hover($event)">
				<div class="before"
				     :style="{width:boundary+'px'}">
					<img src="../../assets/img/ba/origin.png" />
				</div>
				<img class="after" :src="image()" />
			</div>
		</div>
		<div class="text-center py-5">
			<button v-for="(c, index) in selections" :key="index" class="selection"
			        :class="{'active': index === selected}"
			        @click="selectTheme(index)"
			        :style="{
								backgroundColor: c.t === 'color' ? c.s : '',
								backgroundImage:  c.t === 'image' ? 'url('+c.s+')' :''
							}">
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'comparison',
		data: ()=>({
			boundary: 0,
			selections:[
				{ t:'color', s:'#F5F5F5', p:'vanilla.png'},
				{ t:'color', s:'#FCF3CA', p:'latte.png' },
				{ t:'color', s:'#191D2D', p:'blabar.png' },
				{ t:'color', s:'#111111', p:'licorice.png' },
				{ t:'image', s:'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjYzODA2fQ&q=50&fm=jpg&crop=entropy&cs=tinysrgb&w=400', p:'temple.png' },
				{ t:'image', s:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjYzODA2fQ&q=50&fm=jpg&crop=entropy&cs=tinysrgb&w=400', p:'earth.png' },
			],
			selected:0
		}),
		methods:{
			hover(e){
				let contLeft = e.target.getBoundingClientRect().left,
					mouseLeft = e.pageX,
					boundary = mouseLeft-contLeft
				this.boundary = boundary < 0 ? 0 : boundary
			},
			image(){
				return require('../../assets/img/ba/'+this.selections[this.selected].p)
			},
			selectTheme(i){
				this.selected = i
			}
		}
	}
</script>
