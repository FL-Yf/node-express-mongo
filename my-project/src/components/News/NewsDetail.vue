<template>
    <div>
		<TopBar :title='title'/>

		 

    </div>
</template>
<script>
    export default {
        data(){
            return {
            	title:'新闻详情',
            	 newsInfo:{},
            }
        },

        created(){

            let {id}=this.route.params;
            this.$axios.get('getnew/' + id)
            .then(res=>{
                this.newsInfo=res.data.message;
            })
            .catch(err=>console.log(err));
        }

    }
</script>
<style scoped>
</style>