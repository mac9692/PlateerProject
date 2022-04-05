<template>
  <div class="comment">
    <h3>comment({{commentCount}})</h3>
    <button @click="show = !show">댓글 작성</button>
    <transition name="fade">
    <form v-if="show" @submit.prevent="commentSubmitForm">
      작성자 : <textarea v-model="commentWriter" ref="commentWriter" placeholder="작성자임시"></textarea>
      댓글작성 : <textarea v-model="commentContent" ref="commentContent" placeholder="댓글"></textarea>
      <button type="button" @click="show = !show">취소</button>
      <button type="submit" @click="show = !show">작성</button>
    </form>
    </transition>
    <table>
      <thead>
        <tr>
          <th>작성자</th>
          <th>내용</th>
          <th>작성일</th>
          <th>수정일</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in commentList" v-bind:key="item.commentId">
          <td>{{item.writer}}</td>
          <td>{{item.content}}</td>
          <td>{{item.registerDate | dateFormat}}</td>
          <td>{{item.updateDate | dateFormat}}</td>
          <td><button type="button" @click="[showUpdate = !showUpdate, commentIdForUpdate = item.commentId]">수정</button></td>
          <td><button type="button" @click="functionDeleteComment(item.commentId)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <transition name="fade">
      <form v-if="showUpdate" @submit.prevent="commentUpdateForm">
        내용 : <textarea v-model="commentUpdateContent" ref="commentUpdateContent" placeholder="댓글수정"></textarea>
        <button type="button" @click="showUpdate = !showUpdate">취소</button>
        <button type="submit" @click="showUpdate = !showUpdate">작성</button>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["boardId"],

  data() {
    return {
      commentList: [],
      commentCount: '',
      commentId: '',
      commentIdForUpdate: '',
      show: false,
      showUpdate: false
    }
  },

  mounted() {
    this.getComment();
    this.getCommentCount();
  },


  methods: {
    getComment() {
      this.$axios.get('http://localhost/api/comment/'+this.boardId)
      .then((response) => {
        this.commentList = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    },

    getCommentCount() {
      this.$axios.get('http://localhost/api/comment/count/'+this.boardId)
        .then((response) => {
          this.commentCount = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    },

    functionDeleteComment(commentId) {
      this.$axios.post('http://localhost/api/comment/delete/'+commentId)
      .then((response) => {
        alert("삭제되었습니다.");
        this.getComment();
        this.getCommentCount();
      })
      .then((error) => {
        console.log(error);
      })
    },

    commentSubmitForm: function() {
      if(!this.commentContent) {
        alert("내용을 작성하세요.");
        this.$refs.commentContent.focus();
        return;
      }

      const url = "http://localhost/api/comment"

      const data = new FormData();
      data.append("boardId", this.boardId);
      data.append("writer", this.commentWriter);
      data.append("content", this.commentContent);

      this.$axios.post(url, data)
      .then((response) => {
        alert("등록되었습니다.");
        this.getComment();
        this.getCommentCount();
      })
      .catch((error) => {
        console.log(error);
      })
    },

    commentUpdateForm: function() {
      if(!this.commentUpdateContent) {
        alert("내용을 작성하세요.");
        this.$refs.commentUpdateContent.focus();
        return;
      }
      const url = "http://localhost/api/comment/update/" + this.commentIdForUpdate;

      const updateData = new FormData();
      updateData.append("content", this.commentUpdateContent);

      this.$axios.post(url, updateData)
      .then((response) => {
        alert("수정되었습니다.");
        this.getComment();
        this.getCommentCount();
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
