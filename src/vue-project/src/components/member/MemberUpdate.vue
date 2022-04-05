<template>
  <div class="updateMember">
    <h3>회원정보 수정</h3>
    <form @submit.prevent="submitForm">
      <table class="tableUpdate">
        <tr>
          <th>회원번호</th>
          <td>{{memberId}}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>{{email}}</td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td><input type="password" v-model="password" ref="password" value="{{password}}"></td>
        </tr>
        <tr>
          <th>이름</th>
          <td>{{name}}</td>
        </tr>
        <tr>
          <th>생년월일</th>
          <td>{{birthDate}}</td>
        </tr>
        <tr>
          <th>성별</th>
          <td>{{gender}}</td>
        </tr>
        <tr>
          <th>전화번호</th>
          <td><input type="text" v-model="phoneNumber" ref="phoneNumber" value="{{phoneNumber}}"></td>
        </tr>
        <tr>
          <th>주소</th>
          <td><textarea v-model="address" ref="address" value="{{address}}"></textarea></td>
        </tr>
        <tr>
          <th>권한</th>
          <td>{{authority}}</td>
        </tr>
        <tr>
          <th>가입일</th>
          <td>{{registerDate | dateFormat}}</td>
        </tr>
        <tr>
          <th>수정일</th>
          <td>{{updateDate | dateFormat}}</td>
        </tr>
      </table>
      <button type="button" @click="functionView">취소</button>
      <button type="submit">수정</button>
      <button type="button" @click="functionList">회원목록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberId: this.$route.params.memberId,
      email: this.$route.params.email,
      password: this.$route.params.password,
      name: this.$route.params.name,
      birthDate: this.$route.params.birthDate,
      gender: this.$route.params.gender,
      phoneNumber: this.$route.params.phoneNumber,
      address: this.$route.params.address,
      authority: this.$route.params.authority,
      registerDate: this.$route.params.registerDate,
      updateDate: this.$route.params.updateDate
    }
  },

  methods: {
    functionList() {
      this.$router.push({name: 'MemberList'});
    },

    functionView() {
      this.$router.push({name: 'MemberView'});
    },

    submitForm: function() {
      const url = 'http://localhost/api/member/update';

      const data  = new FormData();
      data.append("password", this.password);
      data.append("phoneNumber", this.phoneNumber);
      data.append("address", this.address);
      data.append("memberId", this.memberId);

      this.$axios.post(url, data)
        .then((response) => {
          alert("수정되었습니다.");
          console.log((response));
          this.functionView();
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style scoped>
table {
  width: 80%;
  border: 2px solid #444444;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
th, td{
  border: 2px solid #444444;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}
</style>
