<template>
  <div>
    <mt-swipe :auto="2000">
    <mt-swipe-item>1111</mt-swipe-item>
    <mt-swipe-item>2222</mt-swipe-item>
    <mt-swipe-item>3333</mt-swipe-item>
    </mt-swipe>

    <!-- 下有九宫格 -->
   <div class="grid">
        <my-ul>
             <my-li v-for="(module,index) in modules" :key="index">
                <router-link :to="module.route">
                  <span :class="module.className"></span>
                  <div>{{module.title}}</div>
                </router-link>
            </my-li>
        </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      imgs:[],
      modules:[{
        title:'新闻资讯',className:'back-news',route:{name:'News'}
       },{
        title:'图文分享',className:'back-pic',route:{name:'Photo'}
       },{
        title:'商品展示',className:'back-goods',route:{name:'Show'}
       },{
        title:'留言反馈',className:'back-feed',route:{name:'FeedBack'}
       },{
        title:'搜索咨询',className:'back-search',route:{name:'Advisory'}
       },{
        title:'联系我们',className:'back-callme',route:{name:'Call'}
       }]
    }
  },
  created () {
 
    this.$axios.get('getlunbo')
    .then(res=>{
      this.imgs = res.data.message;
    })
    .catch(err=>console.log(err));
  }
}
</script>

<style scoped>
  .mint-swipe {
  width: 100%;
  height:200px;
}
.mint-swipe img {
  width: 100%;
}

/*九宫格样式*/
   /* img {
        width: 100%;
    }*/
.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}
.grid my-li {
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
}

.back-pic {
    background-image: url(../../static/img/picShare.png);
}
.back-goods {
    background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
    background-image: url(../../static/img/feedback.png);
}
.back-search {
    background-image: url(../../static/img/search.png);
}
.back-callme {
    background-image: url(../../static/img/callme.png);
}
.back-news {
    background-image: url(../../static/img/news.png);
}
</style>
