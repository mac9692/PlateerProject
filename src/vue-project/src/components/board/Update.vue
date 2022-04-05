<template>
  <div>
    <h3>게시물 수정</h3>
      <form @submit.prevent="submitForm">
        <table class="tableUpdate">
          <tr>
            <th>번호</th>
            <td>{{boardId}}</td>
          </tr>
          <tr>
            <th>작성자</th>
            <td>{{writer}}</td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="title" ref="title" value="{{title}}"></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="content" ref="content" value="{{content}}"></textarea></td>
          </tr>
        </table>
        <button type="button" @click="functionView">취소</button>
        <button type="submit">수정하기</button>
        <button type="button" @click="functionList">게시목록</button>
      </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      boardId: this.$route.params.boardId,
      writer: this.$route.params.writer,
      title: this.$route.params.title,
      content: this.$route.params.content
    }
  },

  /**
   * TODO 데이터 조회 및 세팅
   * 1. api.js
   * 2. MIXIN
    */

  methods: {
    functionList() {
      this.$router.push({name: 'BoardList'});
    },

    functionView() {
      this.$router.push({name: 'BoardView'});
    },

    submitForm: function() {
      if (!this.title) {
        alert("제목을 기입해주세요.");
        this.$refs.title.focus();
        return;
      }

      const url = 'http://localhost/api/board/update';

      const data  = new FormData();
      data.append("title", this.title);
      data.append("content", this.content);
      data.append("boardId", this.boardId);

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
