
<template>
  <div>
  <h1>mongodb</h1>
      <div class="li" v-for="item in list" :key="item.id" @click="change(item.id)">{{item.vaule}}</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      list:[
      {
        id:1,
        vaule:'查询'

      },
      {
        id:2,
        vaule:'增加'

      },
      {
        id:3,
        vaule:'删除'

      },
      {
        id:4,
        vaule:'更新'

      },
      {
        id:5,
        vaule:'查询一条'
      }
      ]
    }
  },
  methods:{
    change(val){
      if(val==1){
        console.log(val);
        this.$axios.get('/api/hero')
        .then(res=>{
          console.log(res);
        })
        .catch(err=>console.log(err));
      }else if(val==2){
        console.log(val);
          this.$axios.post('/api/hero',
          {
            name:'盲仔',
            age:'2',
            sex:"瞎子"
          })
          .then(res=>{
            console.log(res);
          })
          .catch(err=>console.log(err));

      }else if(val==3){
        console.log(val);
        this.$axios.delete('/api/hero/5e89650c6c481b2274fc9f23')
        .then(res=>{
            console.log(res);
          })
          .catch(err=>console.log(err));
      }else if(val==4){
        console.log(val);
        this.$axios.put('api/hero/5e89672819c38a0e0c242ab2',{
          name:'王力宏'
        })
        .then(res=>{
            console.log(res);
          })
        .catch(err=>console.log(err));
      }else{
        console.log(val);
        this.$axios.get('api/hero/5e89672819c38a0e0c242ab2')
        .then(res=>{
            console.log(res);
          })
        .catch(err=>console.log(err));
      }
    }
  }
  
}
</script>

<style scoped>
.li{
  height:40px;
  width:100px;
  text-align:center;
  border:1px solid #ccc;
  line-height:40px;
  cursor:pointer;
  margin-top:10px;
}
</style>
