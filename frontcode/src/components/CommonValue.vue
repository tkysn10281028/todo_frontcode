<template>
  <div class="CommonValue"></div>
</template>

<script>
export default {
  props: ["signupuser", "loginuser"],
  data() {
    return { signupUser: this.signupuser, loginUser: this.loginuser };
  },
  created: function () {
    console.log(this.signupUser);
    console.log(this.loginUser);
    this.$emit("signupuser", this.signupUser);
    this.$emit("loginuser", this.loginUser);
  },
};
</script>