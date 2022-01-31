<template>
  <div class="activate">
    <h1>認証コードを入力してください</h1>
    <p>認証コード：</p>
    <input type="text" v-model="inputactivatecode" />
    <button v-on:click="submit">認証開始</button>
  </div>
</template>
<script>
export default {
  data() {
    return { inputactivatecode: "" };
  },
  methods: {
    submit() {
      const params = new URLSearchParams();
      params.append("inputactivatecode", this.inputactivatecode); // 渡したいデータ分だけappendする
      this.axios
        .post(
          "http://white.source.oysterworld.jp/mytodo/user/signup",
          params,
          this.serverPass + "login"
        )
        .then((response) => {
          console.log(response.data);
          window.alert("登録に成功しました。");
          this.$router.push("/login");
        })

        .catch((error) => {
          window.alert(
            "サインアップに失敗しました。認証コードが間違っています。"
          );
          this.$router.push("/signup");
          console.log(error);
        });
    },
  },
};
</script>