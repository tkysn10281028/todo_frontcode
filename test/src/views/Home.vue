<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>emailaddress? ></p>
    <input type="text" v-model="emailaddress" />
    <p>password? ></p>
    <input type="password" v-model="password" /><br />
    <button v-on:click="submit">submit</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return { password: "", emailaddress: "" };
  },
  components: {},
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
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
