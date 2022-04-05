<template>
  <div class="boardList">
    <h3>게시판 목록</h3>
    <select @change="functionCountNumber($event)">
      <option value="10">10개</option>
      <option value="20">20개</option>
      <option value="30">30개</option>
    </select>
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
          <td>{{item.registerDate | dateFormat}}</td>
          <td>{{item.updateDate | dateFormat}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="functionPrevPage()">prev</button>
    <a href="javascript:" v-for="number in this.pageNumber" @click="functionPageNumber(`${number}`)">{{number}}&nbsp;</a>
    <button type="button" @click="functionNextPage()">next</button>
    <button type="button"><router-link :to="{name: 'BoardInsert'}">게시물작성</router-link></button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      boardList: [],
      boardCount: '',
      countNumber: 10,
      pageNumber: '',
      startNumber: 0
    }
  },

  mounted() {
    this.getBoardList();
    this.getBoardCount();
  },

  methods: {
    getBoardList() {
      const url = 'http://localhost/api/board/'+this.startNumber+'/'+this.countNumber;
      this.$axios.get(url)
        .then((response) => {
          this.boardList = response.data;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    },

    getBoardCount() {
      this.$axios.get('http://localhost/api/board/count')
      .then((response) => {
        this.boardCount = response.data;
        this.getPageCount();
      })
      .catch((error) => {
        console.log(error);
      })
    },

    functionView(boardId) {
      this.$router.push({name: 'BoardView', params: {boardId: boardId}});
    },

    functionCountNumber(event) {
      this.countNumber = Number(event.target.value);
      this.getPageCount();
      this.getBoardList();
    },

    getPageCount() {
      this.pageNumber = Math.ceil(this.boardCount/this.countNumber);
    },

    functionPageNumber(number) {
      this.startNumber = (number-1)*this.countNumber;
      this.getBoardList();
    },

    functionPrevPage() {
      this.startNumber -= this.countNumber;
      if(this.startNumber < 0) {
        alert("첫 페이지입니다.");
        this.startNumber = 0;
      }
      this.getBoardList();
    },

    functionNextPage() {
      this.startNumber += this.countNumber;
      if(this.startNumber > this.boardCount) {
        alert("마지막 페이지입니다.");
        this.startNumber -= this.countNumber;
      }
      this.getBoardList();
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
