<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>username:</p>
    <input type="text" v-model="username" />
    <p>emailaddress</p>
    <input type="test" v-model="emailaddress" />
    <p>password</p>
    <input type="password" v-model="password" /><br />
    <button v-on:click="submit">submit</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return { username: "", password: "", emailaddress: "" };
  },
  methods: {
    submit() {
      console.log(this.emailaddress);
      console.log(this.password);
      console.log(this.username);
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
        .then((response) => {
          console.log(response.data);
          this.$router.push("activate");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
