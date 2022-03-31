import Vue from 'vue'
import Router from 'vue-router'
import List from "../components/board/List";
import HelloWorld from "../components/HelloWorld";
import Insert from "../components/board/Insert";
import View from "../components/board/View";
import Update from "../components/board/Update";

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
      component:List
    },
    {
      path:'/board',
      name:'BoardInsert',
      component:Insert
    },
    {
      path:'/board/:boardId',
      name:'BoardView',
      component:View
    },
    {
      path:'/board',
      name:'BoardUpdate',
      component:Update
    }
  ]
})
