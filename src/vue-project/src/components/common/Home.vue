<template>
  <div>
    <p>{{ msg }}</p>
    <p>스프링부트 2.5.2</p>
    <p>Oracle JDK 1.8.0_231</p>
    <p>PostgreSQL 12.10</p>
    <p>Vue.js</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '박진성 개인과제'
    }
  }
}
</script>

<style scoped>
div {
  text-align:center;
  font-size: 18px;
  color:#444444;
}

</style>
