<template>
	<div class="ad-head col-12" id="ad-head">
		<div class="ad-head-icon col-12">
			<div class="ad-head-icon-img"></div>
			<div class="ad-head-icon-text">个人页面</div>
		</div>
		<div class="ad-nav col-12">
			<div class="ad-nav-elem" 
				v-for="nav in navs" 
				v-on:click="changeNav(nav)"
				:class="{active: nav.id == selectedNav}"
				:key="nav.id"
			>
				<router-link to="{{nav.link}}">
					{{nav.text}}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: "AdHead",
	props:{
		navs: Array,
		selectedNav: String
	}
}
</script>

<style scoped>
	.ad-head .ad-nav .ad-nav-elem{
		display: inline-block;
	}
	.ad-head .ad-nav .ad-nav-elem{
		padding: 1em;
	}
	.ad-head .ad-nav .ad-nav-elem.active{
		padding-bottom: 0.2em;
		margin-bottom: 0.5em;
		border-bottom: 0.3em #19CAAD solid;
	}
</style>