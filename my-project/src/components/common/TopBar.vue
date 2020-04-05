<template>
    <mt-header :title='title' class="tit">
    <div @click="back" slot="left">
    <mt-button icon="back">返回</mt-button>
    </div>
    <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>
<script>
    export default {
        name:'TopBar',
         props:['title'], // props属性再template中可以直接用
        data(){
            return {

            }
        },
        methods:{
            back(){
              this.$router.go(-1);
            }
        }
    }
</script>
<style scoped>
.tit{
  background-color:#27ae60;
}
</style>