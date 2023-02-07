<template>
  <div id="app" class="App">
      <Header></Header>
      <div class="container mrgnbtm">
        <div class="row">
          <div class="col-md-12">
              <CreateTask @createTask="taskCreate($event)"></CreateTask>
          </div>
        </div>
      </div>
      <div class="row mrgnbtm">
        <Tasks v-if="articles.length > 0" :articles="articles" @deleteTask="taskDelete($event)" @taskEdit="taskEdit($event)"></Tasks>
      </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './Header.vue'
import CreateTask from './CreateTask.vue'
import Tasks from './Tasks.vue'

import { getAllArticles, createArticle, deleteArticle } from '../../services/ApiService'

console.log('Home')

export default {
  name: 'App',
  components: {
    Header,
    CreateTask,
    Tasks
  },
  data() {
      return {
        articles: [],
          settings: false
      }
  },
  methods: {
    taskCreate(data) {
      console.log('data:::', data)
      createArticle(data).then(response => {
        console.log(response)
        this.getAllTasks();      
      });
    },
    getAllTasks() {
      getAllArticles().then(response => {
        console.log(response)
        this.articles = response
      })
    },
    afterEdit(data) {
      console.log('after edit:::', data)
      getAllArticles().then(response => {
        console.log(response)
        this.articles = response
      })
    },
    taskDelete(taskId) {
       deleteArticle(taskId).then(response => {
        console.log(response)
        this.getAllTasks();
      });
    },
    taskEdit(task) {
      console.log("after task edit", task)
      this.getAllTasks();
    }
  },
  mounted () {
    this.getAllTasks();
  }
}
</script>

<style>
  @import '../../assets/styles/global.css';
</style>
