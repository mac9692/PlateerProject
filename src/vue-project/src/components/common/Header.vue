<template>
  <header>
    <h1><a href="/" class="logo"><img alt="Vue logo" src="../../assets/plateer_logo.jpeg" width="160"></a></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link :to="{name: 'BoardList'}">게시판</router-link></li>
        <li><router-link :to="{name: 'MemberList'}">회원리스트</router-link></li>
        <li><router-link :to="{name: 'Login'}">로그인</router-link></li>
        <li><a href="/logout">로그아웃</a></li>
        <li><router-link :to="{name: 'Signup'}">회원가입</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e;}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration: none; color:#333;}
</style>
