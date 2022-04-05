<template>
  <div class="memberList">
    <h3>회원 목록({{memberCount}})</h3>
    <select @change="functionCountNumber($event)">
      <option value="10">10개</option>
      <option value="20">20개</option>
      <option value="30">30개</option>
    </select>
    <table>
      <thead>
      <tr>
        <th>회원번호</th>
        <th>이메일</th>
        <th>비밀번호</th>
        <th>이름</th>
        <th>생년월일</th>
        <th>성별</th>
        <th>전화번호</th>
        <th>주소</th>
        <th>권한</th>
        <th>가입일</th>
        <th>수정일</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="item in memberList" v-bind:key="item.memberId">
          <td>{{item.memberId}}</td>
          <td><a href="javascript:" @click="functionView(`${item.memberId}`)">{{item.email}}</a></td>
          <td>{{item.password}}</td>
          <td>{{item.name}}</td>
          <td>{{item.birthDate}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.phoneNumber}}</td>
          <td>{{item.address}}</td>
          <td>{{item.authority}}</td>
          <td>{{item.registerDate | dateFormat}}</td>
          <td>{{item.updateDate | dateFormat}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="functionPrevPage()">prev</button>
    <a href="javascript:" v-for="number in this.pageNumber" @click="functionPageNumber(`${number}`)">{{number}}&nbsp;</a>
    <button type="button" @click="functionNextPage()">next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberList: [],
      memberCount: '',
      countNumber: 10,
      pageNumber: '',
      startNumber: 0
    }
  },

  mounted() {
    this.getMemberList();
    this.getMemberCount();
  },

  methods: {
    getMemberList() {
      const url = 'http://localhost/api/member/' + this.startNumber + '/' + this.countNumber;
      this.$axios.get(url)
      .then((response) => {
        this.memberList = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    },

    getMemberCount() {
      this.$axios.get('http://localhost/api/member/count')
      .then((response) => {
        this.memberCount = response.data;
        this.getPageCount();
      })
      .catch((error) => {
        console.log(error);
      })
    },

    functionView(memberId) {
      this.$router.push({name: 'MemberView', params: {memberId: memberId}});
    },

    functionCountNumber(event) {
      this.countNumber = Number(event.target.value);
      this.getPageCount();
      this.getMemberList();
    },

    getPageCount() {
      this.pageNumber = Math.ceil(this.memberCount/this.countNumber);
    },

    functionPageNumber(number) {
      this.startNumber = (number-1) * this.countNumber;
      this.getMemberList();
    },

    functionPrevPage() {
      this.startNumber -= this.countNumber;
      if(this.startNumber <0 ) {
        alert("첫 번째 페이지입니다.");
        this.startNumber = 0;
      }
      this.getMemberList();
    },

    functionNextPage() {
      this.startNumber += this.countNumber;
      if(this.startNumber > this.memberCount) {
        alert("마지막 페이지입니다.");
        this.startNumber -= this.countNumber;
      }
      this.getMemberList();
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
