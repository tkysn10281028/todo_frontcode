<template>
  <div class="undone">
    <div class="nav">
      <h1>未完了タスク一覧</h1>
      <p>TODOを入力してください</p>
      <input type="text" v-model="todo" />
      <button v-on:click="submit">Create!</button>
      <button v-on:click="disableTodos">Delete!</button>
      <ul>
        <li v-for="item in todolist" v-bind:key="item.todoid">
          <div class="check">
            <input type="checkbox" v-model="item.isChecked" />
            <div v-bind:class="{ complete: item.isChecked }">
              <div v-on:click="Update(item)">
                {{ item.name }} : {{ item.time }} : {{ item.date }}
              </div>
            </div>
          </div>
          <input type="text" v-model="item.updatename" v-if="item.isUpdate" />
          <input type="time" v-model="item.updatetime" v-if="item.isUpdate" />
          <input type="date" v-model="item.updatedate" v-if="item.isUpdate" />
        </li>
      </ul>
    </div>
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
      isUpdate: false,
      isChecked: false,
      updatetime: "",
      updatedate: "",
      updatename: "",
    };
  },
  methods: {
    getTodos() {
      this.todolist.splice(0, this.todolist.length);
      this.axios
        .get("http://localhost:8082/todo/read")
        .then((response) => {
          console.log(response);
          for (let i = 0; i < response.data.length; i++) {
            var name = response.data[i].name;
            var date = response.data[i].date;
            var time = response.data[i].time;
            var todoid = response.data[i].usertododetailsid;
            var isChecked = false;
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
          window.alert("読み込みエラー！ログインしていない可能性があります！");
          console.log(error);
        });
    },
    submit() {
      const params = new URLSearchParams();
      params.append("todo", this.todo); // 渡したいデータ分だけappendする
      this.axios
        .post(
          "http://localhost:8082/todo/create",
          params,
          this.serverPass + "login"
        )
        .then(() => {
          this.getTodos();
        })
        .catch((error) => {
          window.alert("ログインに失敗しました。");
          console.log(error);
        });
    },
    disableTodos() {
      var deleteList = [];
      for (let i = 0; i < this.todolist.length; i++) {
        if (this.todolist[i].isChecked) {
          deleteList.push(this.todolist[i].todoid);
        }
      }
      console.log(deleteList);

      const params = new URLSearchParams();
      for (let i = 0; i < deleteList.length; i++) {
        let deleteId = deleteList[i];
        params.append("deleteId", deleteId);
      }

      this.axios
        .post(
          "http://localhost:8082/todo/delete",
          params,
          this.serverPass + "login"
        )
        .then(() => {
          this.getTodos();
        })
        .catch((error) => {
          window.alert("削除失敗");
          console.log(error);
        });
    },
    Update(item) {
      if (!item.isUpdate) {
        item.isUpdate = true;
      } else {
        item.isUpdate = false;

        item.date = item.updatedate;
        item.time = item.updatetime;
        item.name = item.updatename;

        console.log("updated");
        const params = new URLSearchParams();
        params.append("todoid", item.todoid); // 渡したいデータ分だけappendする
        params.append("name", item.updatename);
        params.append("date", item.updatedate);
        params.append("time", item.updatetime);
        this.axios
          .post(
            "http://localhost:8082/todo/update",
            params,
            this.serverPass + "login"
          )
          .then(() => {})
          .catch((error) => {
            console.log(error);
            window.alert("更新失敗");
          });
      }
    },
  },
  created: function () {
    this.getTodos();
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