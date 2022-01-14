<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <p>Input Your EmailAddress Here:</p>
    <input type="text" v-model="emailaddress" /><br />
    <p>Input Your Password Here:</p>
    <input type="password" v-model="password" /><br />
    <button v-on:click="submit">login</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      emailaddress: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.axios
        .post("http://localhost:8082/", {
          User: {
            emailaddress: this.emailaddress,
            password: this.password,
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
