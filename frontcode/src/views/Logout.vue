<template>
  <a href="/">Go Back to Welcome</a>
</template>
<script>
export default {
  created: function () {
    window.alert("ログアウトしました。");
    this.axios.get("http://white.source.oysterworld.jp/mytodo/logout");
  },
};
</script>