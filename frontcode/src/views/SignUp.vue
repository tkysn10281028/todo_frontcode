<template>
  <div class="signup">
    <h1>ユーザー新規登録</h1>
    <p v-if="usernameerror.length">{{ usernameerror[0] }}</p>
    <p v-if="emailaddresserror.length">{{ emailaddresserror[0] }}</p>
    <p v-if="passworderror.length">{{ passworderror[0] }}</p>
    <p>ユーザー名：</p>
    <input type="text" v-model="username" />

    <p>メールアドレス：</p>
    <input type="text" v-model="emailaddress" />

    <p>パスワード：</p>
    <input type="password" v-model="password" /><br />

    <button v-on:click="submit">button</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      emailaddress: "",
      password: "",
      usernameerror: [],
      passworderror: [],
      emailaddresserror: [],
    };
  },
  methods: {
    submit() {
      this.passworderror.splice(0, this.passworderror.length);
      this.usernameerror.splice(0, this.usernameerror.length);
      this.emailaddresserror.splice(0, this.emailaddresserror.length);

      var passreg = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,20}$/i;
      var mailreg =
        /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/;
      if (this.username === "") {
        this.usernameerror.push("空白は許可されていません");
      }
      if (!passreg.test(this.password)) {
        this.passworderror.push(
          "パスワードは8文字以上20文字以下で数字小英字を含めてください"
        );
      }
      if (!mailreg.test(this.emailaddress)) {
        this.emailaddresserror.push("メールアドレスの形式が違います。");
      }

      // console.log(this.usernameerror.length);
      // console.log(this.passworderror.length);
      // console.log(this.emailaddresserror.length);

      if (
        this.usernameerror.length == 0 &&
        this.passworderror.length == 0 &&
        this.emailaddresserror.length == 0
      ) {
        // console.log(this.username !== "");
        // console.log(mailreg.test(this.emailaddress));
        // console.log(passreg.test(this.password));

        const params = new URLSearchParams();
        params.append("emailaddress", this.emailaddress); // 渡したいデータ分だけappendする
        params.append("password", this.password);
        params.append("username", this.username);
        this.axios
          .post(
            "http://localhost:8082/user/signup/activate",
            params,
            this.serverPass + "login"
          )
          .then(() => {
            this.$router.push("signup/activate");
          })
          .catch((error) => {
            console.log(error);
            window.alert(
              "サインアップに失敗しました。メールアドレスが既に登録されている可能性があります。"
            );
          });
      }
    },
  },
};
</script>