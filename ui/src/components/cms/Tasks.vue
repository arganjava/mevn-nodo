<template>
    <div class="container">
        <h2>Articles</h2>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Assignee</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="article in articles" :key="article._id">
                  <td>{{ article._id }}</td>
                  <td>{{ article.title }}</td>
                  <td>{{ article.project }}</td>
                  <td>
                    <div class="row">
                        <div class="col-md-3">
                            <EditModal @editTask='editTask(article)' :edittask="article"/>
                        </div>
                        <div class="col-md-3">
                            <button type="button" @click='deleteTask(article._id)' class="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                  </td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import EditModal from './EditModal.vue'
    import router from '../../routes'

    export default {
        name: 'Tasks',
        components: {
            EditModal
        },
        props: ['articles'],
        methods: {
            deleteTask(articleId) {
               this.$emit('deleteTask', articleId)
            },
            editTask(data) {
                this.$emit('editTask', data)
            },
            gotoDetail(article) {
                localStorage.setItem('article', JSON.stringify(article))
                router.push('detail');
            }
        }
     }
</script>