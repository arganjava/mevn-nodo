<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Title</th>
              <th>Project</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="article in articles" :key="article._id">
              <td>{{ article.title }}</td>
              <td>{{ article.project }}</td>
              <td>
                <div class="row">
                  <div class="col-md-4">
                    <button type="button" @click='readArticle(article)' class="btn btn-info right">Read Article</button>
                  </div>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div v-if="title != ''" class="form-group col-md-6">
              <h2>{{title}}</h2>
              <h3>{{project}}</h3>
              <p>{{description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        props: ['articles'],
        data() {
          return {
            title: "",
            project: "",
            description: ""
          }
        },
        methods: {
            deleteTask(taskId) {
               this.$emit('deleteTask', taskId)
            },
            taskEdit(data) {
                this.$emit('editTask', data)
            },
            readArticle(article) {
                this.title = article.title;
                this.project = article.project;
                this.description = article.description;
            }
        }
     }
</script>