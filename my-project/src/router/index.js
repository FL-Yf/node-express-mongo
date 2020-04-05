import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member'
import Shopcart from '@/components/Shopcart/Shopcart'
import Search from '@/components/Search/Search'
import News from '@/components/News/News'
import Photo from '@/components/Photo/Photo'
import Show from '@/components/Show/Show'
import FeedBack from '@/components/FeedBack/FeedBack'
import Advisory from '@/components/Advisory/Advisory'
import Call from '@/components/Call/Call'
import NewsDetail from '@/components/News/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/member',
      name: 'Member',
      component: Member
    }, {
      path: '/shopcart',
      name: 'Shopcart',
      component: Shopcart
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    },{
    	path: '/News',
      	name: 'News',
      	component: News
    },{
    	path: '/Photo',
      	name: 'Photo',
      	component: Photo
    }
    ,{
    	path: '/Show',
      	name: 'Show',
      	component: Show
    }
    ,{
    	path: '/FeedBack',
      	name: 'FeedBack',
      	component: FeedBack
    }
    ,{
    	path: '/Advisory',
      	name: 'Advisory',
      	component: Advisory
    }
    ,{
    	path: '/Call',
      	name: 'Call',
      	component: Call
    },{
    	path: '/News/detail/:id',
      	name: 'NewsDetail',
      	component: NewsDetail
    }
    	
  ]
})
