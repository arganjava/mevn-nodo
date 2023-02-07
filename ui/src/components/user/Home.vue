<template>
  <div id="app" class="App">
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-md-12 mrgnbtm">
            <div class="row">
              <div class="form-group col-md-6">
                <input type="text" class="form-control" @change="onChangeSearch()" v-model="searchProject" name="project" id="project" placeholder="Search Project" />
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Articles v-if="articles.length > 0" :articles="articles" @deleteArticle="taskDelete($event)" @editArticle='taskEdit($event)'></Articles>
      </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Header from './Header.vue'
import Articles from './Articles.vue'

import { getAllArticles, createArticle, deleteArticle, editArticle, findArticleByProject } from '../../services/ApiService'

console.log('Home')

export default {
  name: 'App',
  components: {
    Header,
    Articles
  },
  data() {
      return {
          articles: [],
          settings: false,
          searchProject: "",
      }
  },
  methods: {
    taskCreate(data) {
      console.log('data:::', data)
      createArticle(data).then(response => {
        console.log(response)
        this.getAllArticles();      
      });
    },
    onChangeSearch() {
      if(this.searchProject != ""){
        findArticleByProject(this.searchProject).then(response => {
          this.articles = response;
        });
      }else {
        this.getAllArticles();
      }
    },
    getAllArticles() {
      getAllArticles().then(response => {
        console.log(response)
        this.articles = response
      })
    },
    taskDelete(taskId) {
       deleteArticle(taskId).then(response => {
        console.log(response)
        this.getAllArticles();
      });
    },
    taskEdit(task) {
      editArticle(task).then(res => {
        console.log(res);
        this.getAllArticles();
      })
    }
  },
  mounted () {
    this.getAllArticles();
  }
}
</script>

<style>
  @import '../../assets/styles/global.css';
</style>
