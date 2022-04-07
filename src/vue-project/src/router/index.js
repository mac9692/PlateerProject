import Vue from 'vue'
import Router from 'vue-router'
import List from "../components/board/List";
import Insert from "../components/board/Insert";
import View from "../components/board/View";
import Update from "../components/board/Update";
import MemberList from "../components/member/MemberList";
import MemberView from "../components/member/MemberView";
import MemberUpdate from "../components/member/MemberUpdate";
import Login from "../components/member/Login";
import Signup from "../components/member/Signup";
import Home from "../components/common/Home";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/board',
      name:'BoardList',
      component: List
    },
    {
      path:'/board',
      name:'BoardInsert',
      component: Insert
    },
    {
      path:'/board/:boardId',
      name:'BoardView',
      component: View
    },
    {
      path:'/board',
      name:'BoardUpdate',
      component: Update
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/signup',
      name:'Signup',
      component: Signup
    },
    {
      path:'/member',
      name:'MemberList',
      component: MemberList
    },
    {
      path:'/member/:memberId',
      name: 'MemberView',
      component: MemberView
    },
    {
      path:'/member',
      name: 'MemberUpdate',
      component: MemberUpdate
    }
  ]
})
