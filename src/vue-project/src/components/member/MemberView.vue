<template>
  <div class="memberView">
    <h3>회원정보</h3>
    <table>
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
        <td>{{password}}</td>
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
        <td>{{phoneNumber}}</td>
      </tr>
      <tr>
        <th>주소</th>
        <td>{{address}}</td>
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
    <button type="button" @click="functionUpdate(memberId)">회원정보수정</button>
    <button type="button" @click="functionDelete(memberId)">회원정보삭제</button>
    <button type="button" @click="functionList">회원목록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberId: this.$route.params.memberId,
      email: '',
      password: '',
      name: '',
      birthDate: '',
      gender: '',
      phoneNumber: '',
      address: '',
      authority: '',
      registerDate: '',
      updateDate: ''
    }
  },

  mounted() {
    this.functionView();
  },

  methods: {
    functionList() {
      delete this.memberId;
      this.$router.push({name: 'MemberList'});
    },

    functionView() {
      this.$axios.get('http://localhost/api/member/'+ this.$route.params.memberId)
      .then((response) => {
        this.memberId = response.data.memberId;
        this.email = response.data.email;
        this.password = response.data.password;
        this.name = response.data.name;
        this.birthDate = response.data.birthDate;
        this.gender = response.data.gender;
        this.phoneNumber = response.data.phoneNumber;
        this.address = response.data.address;
        this.authority = response.data.authority;
        this.registerDate = response.data.registerDate;
        this.updateDate = response.data.updateDate;
      })
      .catch((error) =>{
        console.log(error);
      })
    },

    functionUpdate(memberId) {
      this.$router.push({name: 'MemberUpdate',
        params: {memberId: memberId, email: this.email, password: this.password, name: this.name,
          birthDate: this.birthDate, gender: this.gender, phoneNumber: this.phoneNumber, address: this.address,
        authority: this.authority, registerDate: this.registerDate, updateDate: this.updateDate}});
    },

    functionDelete(memberId) {
      this.$axios.post('http://localhost/api/member/delete/' + this.memberId)
      .then((response) => {
        alert("회원번호 " + this.memberId + "의 회원정보가 삭제되었습니다.");
        this.functionList();
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
th, td {
  border: 2px solid #444444;
  padding: 10px;
  text-align: center;
  vertical-align: middle;
}
</style>
