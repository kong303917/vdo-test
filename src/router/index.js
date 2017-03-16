import Vue from 'vue';
import Router from 'vue-router';

import Home from './../view/Home';
import MovieTab from './../view/Movie/Tab';
import MovieSubject from './../view/Movie/Subject';
import MovieSearch from './../view/Movie/Search';
import About from './../view/About/Index';
import Test from './../view/Test';
//import Hello from '@/components/Hello'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: Hello
    }*/
    {
      path: '/test',
      component: Test,
    },
    {
      path: '/',
      redirect: '/movie/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie/home',
      name: 'MovieHome',
      component: MovieTab,
    },
    {
      path: '/movie/subject/:id',
      name: 'MovieSubject',
      component: MovieSubject,
    },
    {
      path: '/movie/search',
      name: 'MovieSearch',
      component: MovieSearch,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/Vdo',
      redirect: '/movie/home',
    },
    {
      path: '/vdo',
      redirect: '/movie/home',
    },
    {
      path: '/vue-douban',
      redirect: '/movie/home',
    },
    {
      path: '/douban',
      redirect: '/movie/home',
    },
  ],
});
