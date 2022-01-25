<template>
  <div class="Menu">
    <button type="button" class="menu-btn" v-on:click="open = !open">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
    <div class="menu" v-bind:class="{ 'is-active': open }">
      <router-link to="/">Welcome</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/logout">Logout</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { open: false };
  },
};
</script>
<style>
@import "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
<style>
.menu-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
}

/*----------------------------
* メニュー本体
*----------------------------*/
.menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(34, 201, 1, 0.411);
}
.menu__item {
  width: 100%;
  height: auto;
  padding: 0.5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}

/*----------------------------
* アニメーション部分
*----------------------------*/

/* アニメーション前のメニューの状態 */
.menu {
  transform: translateX(100vw);
  transition: all 0.3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active {
  transform: translateX(0);
}
</style>
