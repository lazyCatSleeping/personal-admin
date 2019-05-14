<template>
	<div class="ad-head col-12" id="ad-head">
		<div class="ad-head-icon col-1">
			<div class="ad-head-icon-img"></div>
			<div class="ad-head-icon-text">test</div>
		</div>
		<div class="ad-nav col-11 text-right">
			<div class="ad-nav-elem" 
				v-for="nav in navs" 
				v-on:click="changeNav(nav)"
				:class="{active: nav.id == selectedNav}"
				:key="nav.id"
			>
				{{nav.text}}
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
</style>