<template>
  <div class="undone">
    <router-link to="/todo/undone">まだ</router-link> ||
    <router-link to="/todo/done">終わった</router-link>
    <router-view></router-view>
    <h1>完了タスク一覧</h1>
    <button v-on:click="submit">button</button>
    <ul>
      <li v-for="item in DoneList" v-bind:key="item.todoid">
        <div class="check">
          <input type="checkbox" v-model="item.isChecked" />
          <div v-bind:class="{ complete: item.isChecked }">
            {{ item.name }} : {{ item.time }} : {{ item.date }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todolist: [],
      todoid: "",
      todo: "",
      name: "",
      time: "",
      date: "",
      updatetime: "",
      updatedate: "",
      updatename: "",
    };
  },
  created: function () {
    this.getTodos();
  },
  methods: {
    getTodos() {
      this.axios
        .get("http://localhost:8082/todo/read")
        .then((response) => {
          this.todolist.splice(0, response.data.length);
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            var name = response.data[i].name;
            var date = response.data[i].date;
            var time = response.data[i].time;
            var todoid = response.data[i].usertododetailsid;
            var isChecked = true;
            var isUpdate = false;
            var updatetime = response.data[i].time;
            var updatedate = response.data[i].date;
            var updatename = response.data[i].name;

            this.todolist.push({
              name,
              date,
              time,
              todoid,
              isChecked,
              isUpdate,
              updatetime,
              updatedate,
              updatename,
            });
          }
          console.log(this.todolist);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    submit() {
      console.log("deleted");
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.check {
  justify-content: center;
  display: flex;
}
.complete {
  color: rgb(187, 182, 182);
  text-decoration: line-through;
}
ul {
  list-style: none;
}
</style>