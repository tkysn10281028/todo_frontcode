<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>activatecode plz:</p>
    <input type="text" v-model="activatecode" />
    <button v-on:click="submit">submit</button>
  </div>
</template>
<script>
export default {
  name: "activate",
  data() {
    return { activatecode: "" };
  },
  methods: {
    submit() {
      console.log(this.activatecode);
      const params = new URLSearchParams();
      params.append("emailaddress", this.activatecode); // 渡したいデータ分だけappendする
      this.axios
        .post(
          "http://localhost:8082/user/signup",
          params,
          this.serverPass + "login"
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>