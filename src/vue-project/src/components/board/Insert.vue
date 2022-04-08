<template>
  <div>
    <h3>게시물 등록</h3>
    <div class="insertWrap">
      <form @submit.prevent="submitForm">
        <table class="tableInsert">
          <tr>
            <th>작성자</th>
            <td><input type="text" v-model="writer" ref="writer" placeholder="작성자"></td>
          </tr>
          <tr>
            <th>제목</th>
            <td><input type="text" v-model="title" ref="title" placeholder="제목"></td>
          </tr>
          <tr>
            <th>내용</th>
            <td><textarea v-model="content" ref="content" placeholder="내용"></textarea></td>
          </tr>
          <tr>
            <td><button type="submit">등록하기</button></td>
            <td><button type="button" @click="functionList">게시물목록</button></td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    writer: '',
    title: '',
    content: ''
  },

  methods : {
    functionList() {
      this.$router.push({name: 'BoardList', query: this.body});
    },

    submitForm: function() {
      if(!this.title) {
        alert("제목을 기입해주세요.");
        this.$refs.title.focus();
        return;
      }

      const url = 'http://localhost/api/board';

      const data = new FormData();
      data.append("writer", this.writer);
      data.append("title", this.title);
      data.append("content", this.content);

      this.$axios.post(url, data)
      .then((response) => {
          alert("등록되었습니다.");
          console.log(response);
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
