<template>
  <div class="Login">
    <h1>ログインしてください</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
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
    return { password: "", emailaddress: "" };
  },
  methods: {
    submit() {
      console.log(this.emailaddress);
      console.log(this.password);
      const params = new URLSearchParams();
      params.append("emailaddress", this.emailaddress); // 渡したいデータ分だけappendする
      params.append("password", this.password);
      this.axios
        .post("http://localhost:8082/", params, this.serverPass + "login")
        .then((response) => {
          var name = response.data.username;
          if (name != null) {
            window.alert("ようこそ" + name + "さん！");
            this.$router.push("/todo/undone");
          }
        })
        .catch((error) => {
          window.alert("ログインに失敗しました。");
          console.log(error);
        });
    },
  },
};
</script>
