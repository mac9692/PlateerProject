<template>
  <div class="boardView">
    <h3>게시물 상세화면</h3>
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
      <tr>
        <td>{{boardId}}</td>
        <td>{{writer}}</td>
        <td>{{title}}</td>
        <td>{{content}}</td>
        <td>{{registerDate}}</td>
        <td>{{updateDate}}</td>
      </tr>
      </tbody>
    </table>
    <button type="button" @click="functionUpdate(boardId)">게시물수정</button>
    <button type="button" @click="functionDelete(boardId)">삭제하기</button>
    <button type="button" @click="functionList">게시물목록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardId: '',
      writer: '',
      title: '',
      content: '',
      registerDate: '',
      updateDate: '',
    }
  },
  mounted() {
    this.functionView();
  },
  methods : {
    functionList() {
      delete this.boardId
      this.$router.push({name: 'BoardList'});
    },

    functionUpdate(boardId) {
      this.$router.push({name: 'BoardUpdate', params: {boardId: boardId}});
    },

    functionView() {
      this.$axios.get('http://localhost/api/board/' + this.$route.params.boardId)
      .then((response) => {
        this.boardId = response.data.boardId;
        this.writer = response.data.writer;
        this.title = response.data.title;
        this.content = response.data.content;
        this.registerDate = response.data.registerDate;
        this.updateDate = response.data.updateDate;
      })
      .catch((error) => {
        console.log(error);
      })
    },

    functionDelete(boardId) {
      this.$axios.delete('http://localhost/api/board/' + this.$route.params.boardId)
      .then((response) => {
        alert("삭제되었습니다.");
        this.functionList();
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
