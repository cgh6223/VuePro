<template>
	<div class="box">
		<span style="color: #409EFF;margin: 0 10px;">{{tagData.msg}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			data:{
				type:Object,
				default:{
					status:1,
					msg:'已备案'
				}
			},
		},
		data(){
			return{
				tagData:{},
			}
		},
		created() {
			this.tagData = this.data;
		}
	}
</script>

<style>
	.box{
		display: inline-block;
		margin: 0 0;
	}

</style>
