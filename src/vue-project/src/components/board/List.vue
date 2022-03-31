<template>
  <div class="boardList">
    <h3>게시판 목록({{boardCount}})</h3>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>작성자</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성일</th>
          <th>수정일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in boardList" v-bind:key="item.boardId">
          <td>{{item.boardId}}</td>
          <td>{{item.writer}}</td>
          <td><a href="javascript:" @click="functionView(`${item.boardId}`)">{{item.title}}</a></td>
          <td>{{item.content}}</td>
          <td>{{item.registerDate}}</td>
          <td>{{item.updateDate}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button"><router-link :to="{name: 'BoardInsert'}">게시물작성</router-link></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardList: [],
      boardCount: ''
    }
  },

  mounted() {
    this.getBoardList();
    this.getBoardCount();
  },

  methods: {
    getBoardList() {
      this.$axios.get('http://localhost/api/board')
        .then((response) => {
          this.boardList = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },

    getBoardCount() {
      this.$axios.get('http://localhost/api/board/count')
      .then((response) => {
        this.boardCount = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    functionView(boardId) {
      this.$router.push({name: 'BoardView', params: {boardId: boardId}});
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
