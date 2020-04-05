// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入全局样式
import '../static/css/global.css';

// Mint-Ui引入全部组件
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

//引入axios
import Axios from 'axios';
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:8080';
// axios 结束


// 全局组件 开始
import MyUl from './components/common/MyUl';
import MyLi from './components/common/MyLi';
import TopBar from './components/common/TopBar';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
Vue.component(TopBar.name,TopBar);


//时间处理插件moment
// 定义全局过滤器 开始
import Moment from 'moment';
Vue.filter('convertTime',function(data,Str){
	return Moment(data).format(Str);
});

// 定义全局过滤器 结束
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
