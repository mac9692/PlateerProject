import Vue from 'vue'
import Router from 'vue-router'
import List from "../components/board/List";
import HelloWorld from "../components/HelloWorld";
import Insert from "../components/board/Insert";
import View from "../components/board/View";
import Update from "../components/board/Update";
import SignIn from "../components/member/SignIn";
import SignUp from "../components/member/SignUp";
import MemberList from "../components/member/MemberList";
import MemberView from "../components/member/MemberView";
import MemberUpdate from "../components/member/MemberUpdate";


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BoardHelloWorld',
      component: HelloWorld
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
      path:'/signIn',
      name:'SignIn',
      component: SignIn
    },
    {
      path:'/signUp',
      name:'SignUp',
      component: SignUp
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
