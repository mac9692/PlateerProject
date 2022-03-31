<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export default {
  components: {
    'Header': Header,
    'Footer': Footer
  }
}
</script>

<style>
  body {
    text-align: center;
    color: #2c3e50;
    margin:0; padding:0;
  }
</style>
