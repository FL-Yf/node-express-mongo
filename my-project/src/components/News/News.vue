<template>
    <div>
		<TopBar :title='title'/>
		<p>发表时间:{{"20201120" | convertTime('YYYY年MM月DD日 h:mm:ss ')}}</p>
		 <!-- 新闻列表 -->
         <div class="demo">
              <ul>
                    <li v-for="(news,index) in newList" :key="index">
                        <router-link :to="{ name:'NewsDetail',params:{id:news.id} }">
                            <img class="" :src="news.img_url">
                            <div >
                                <span>{{news.title}}</span>
                                <div class="news-desc">
                                    <p>点击数:{{news.click}}</p>
                                    <p>发表时间:{{news.add_time | convertTime('YYYY年MM月DD日')}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
    </div>

    </div>
</template>
<script>
    export default {
        data(){
            return {
            	title:'新闻页面',
            	newList:[],
            }
        },

        created(){
        	this.$axios.get('getnewslist')
        		.then(res=>{
        			this.newList=res.data.message;
        		})
        		.catch(err=>console.log(err));
        	
        }

    }
</script>
<style scoped>
</style>