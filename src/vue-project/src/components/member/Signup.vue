<template>
  <div>
    <h3>회원가입</h3>
    <div class="signupForm">
    <div>
      <h3>아이디</h3>
      <div>
        <input v-model="signup.email" type="email" maxlength="30" placeholder="아이디를 입력하세요." @blur="emailValid">
        <br>
        <span class="error" v-if="!emailValidValue">
          아이디 형식이 맞지 않습니다.
        </span>
      </div>
    </div>

    <div>
      <h3>비밀번호</h3>
      <div>
        <input v-model="signup.password" type="password" maxlength="16" placeholder="비밀번호를 입력하세요." @blur="passwordValid">
        <br>
        <span class="error" v-if="!passwordValidValue">
          유효하지 않은 비밀번호 입니다.
        </span>
      </div>
    </div>

    <div>
      <h3>비밀번호 확인</h3>
      <input v-model="passwordCheck" type="password" maxlength="16" placeholder="비밀번호를 입력하세요." @blur="passwordCheckValid">
      <br>
      <span class="error" v-if="!passwordCheckValue">
        비밀번호가 일치하지 않습니다.
      </span>
    </div>

    <div>
      <h3>이름</h3>
      <input v-model="signup.name" type="text" maxlength="20" placeholder="이름을 입력하세요.">
      <br>
      <span class="error" v-if="checkFlag && !signup.name">
        이름을 입력하세요.
      </span>
    </div>

    <div>
      <h3>생년월일</h3>
      <span>
        <select v-model="birthDateYYYY">
          <option value="">년</option>
          <option v-for="(item, index) in YYYYList" :key="index" :value="item.value">
            {{item.text}}
          </option>
        </select>

        <select v-model="birthDateMM">
          <option value="">월</option>
          <option v-for="(item, index) in MMList" :key="index" :value="item.value">
            {{item.text}}
          </option>
        </select>

        <select v-model="birthDateDD">
          <option value="">일</option>
          <option v-for="(item, index) in DDList" :key="index" :value="item.value">
            {{item.text}}
          </option>
        </select>
        <br>
        <span class="error" v-if="checkFlag && (!birthDateYYYY || !birthDateMM || !birthDateDD)">
          생년월일을 입력하세요.
        </span>
      </span>
    </div>

    <div>
      <h3>성별</h3>
      <input type="radio" id="male" value="남자" v-model="signup.gender">
      <label for="male">남자</label>
      <input type="radio" id="female" value="여자" v-model="signup.gender">
      <label for="female">여자</label>
      <br>
      <span class="error" v-if="checkFlag && !signup.gender">
        성별을 선택하세요.
      </span>
    </div>

    <div>
      <h3>휴대폰번호</h3>
      <input v-model="signup.phoneNumber" type="text" maxlength="20" placeholder="휴대폰번호를 입력하세요.">
      <br>
      <span class="error" v-if="checkFlag && !signup.phoneNumber">
        휴대폰 번호를 입력해주세요.
      </span>
    </div>

    <div>
      <h3>주소</h3>
      <input v-model="signup.address" type="text" maxlength="100" placeholder="주소를 입력하세요.">
      <br>
      <span class="error" v-if="checkFlag && !signup.address">
        주소를 입력하세요.
      </span>
    </div>

    <div>
      <h3>권한</h3>
      <input type="radio" id="admin" value="ADMIN" v-model="signup.authority">
      <label for="admin">기업회원</label>
      <input type="radio" id="member" value="MEMBER" v-model="signup.authority">
      <label for="member">일반회원</label>
      <br>
      <span class="error" v-if="checkFlag && !signup.authority">
        회원 유형을 선택하세요.
      </span>
    </div>

    <button type="button" @click="functionSignup">회원가입</button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signup: {
        email: '',
        password: '',
        name: '',
        birthDate: '',
        gender: '',
        phoneNumber: '',
        address: '',
        authority: ''
      },
      YYYYList: [],
      MMList: [],
      DDList: [],
      birthDateYYYY: '',
      birthDateMM: '',
      birthDateDD: '',
      checkFlag: false,
      emailValidValue: true,
      passwordValidValue: true,
      passwordCheckValue: true,
      passwordCheck: ''
    }
  },

  created() {
    const nowYear = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
      let year = nowYear -i;
      this.YYYYList.push({ value: year, text: year });
    }

    for (let i = 1; i < 13; i++) {
      if(i < 10) {
        i = 0 + "" + i;
      }
      this.MMList.push({ value: i, text: i });
    }

    for (let i = 1; i < 32; i++) {
      if(i < 10) {
        i = 0 + "" + i;
      }
      this.DDList.push({ value: i, text: i });
    }
  },
  methods: {
    emailValid() {
      if(/^[A-Za-z0-9]+$/.test(this.signup.email)) {
        this.emailValidValue = true
      } else {
        this.emailValidValue = false
      }
    },

    passwordValid() {
      if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/.test(this.signup.password)) {
        this.passwordValidValue = true
      } else {
        this.passwordValidValue = false
      }
    },

    passwordCheckValid() {
      if(this.signup.password === this.passwordCheck) {
        this.passwordCheckValue = true
      } else {
        this.passwordCheckValue = false
      }
    },

    isEmpty(data) {
      if (data === "" || data === undefined) {
        return true;
      } else {
        return false;
      }
    },

    functionSignup() {
      this.checkFlag = true;
      if(
        !this.isEmpty(this.signup.email) &&
        !this.isEmpty(this.signup.password) &&
        !this.isEmpty(this.signup.name) &&
        !this.isEmpty(this.birthDateYYYY) &&
        !this.isEmpty(this.birthDateMM) &&
        !this.isEmpty(this.birthDateDD) &&
        !this.isEmpty(this.signup.gender) &&
        !this.isEmpty(this.signup.phoneNumber) &&
        !this.isEmpty(this.signup.address) &&
        !this.isEmpty(this.signup.authority)
      ) {
        this.signup.birthDate = this.birthDateYYYY + "" + this.birthDateMM + "" + this.birthDateDD;
        const url = 'http://localhost/api/member';
        const data = this.signup;
        this.$axios.post(url, data)
          .then((response) => {
            this.$router.push({name: 'Login'});
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
  }
}
</script>

<style scoped>
.signupForm {
  width: 80%;
  border: 2px solid #444444;
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}

.error {
  color: red;
  font-size: 12px;
}
</style>
