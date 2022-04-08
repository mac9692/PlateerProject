<template>
  <div>
    <h3>로그인</h3>
      <form @submit.prevent="functionLogin">
        <div>
          <h3>아이디</h3>
          <input v-model="login.email" type="text" maxlength="30" placeholder="example@example.com">
        </div>
        <div>
          <h3>비밀번호</h3>
          <input v-model="login.password" type="password" maxlength="16" placeholder="비밀번호를 입력하세요.">
        </div>
        <button type="submit">로그인</button>
      </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: 'admin',
        password: 'admin'
      }
    }
  },

  methods: {
    functionLogin() {
      const url = "http://localhost/api/login";
      const data = new FormData;
      data.append("email", this.login.email);
      data.append("password", this.login.password);

      this.$axios.post(url, data)
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>
</style>
