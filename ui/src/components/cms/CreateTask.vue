<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 mrgnbtm">
        <h2>Article Form</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="project">Project</label>
              <input type="text" class="form-control" v-model="project" name="project" id="project" placeholder="Project" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="title">Title</label>
              <input type="text" class="form-control" v-model="title" name="title" id="title" placeholder="Title" />
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="description">Description</label>
              <textarea class="form-control" v-model="description" name="description" id="description" > </textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <button type="button" @click='createTask()' class="btn btn-success">Create</button>
            </div>
            <div class="col-md-3">
              <button type="button" @click='backToHome()' class="btn btn-info">Back To Home</button>
            </div>
          </div>
        </form>
        </div>
    </div>
   </div>
</template>

<script>
import router from "../../routes";

export default {
  name: 'CreateTask',
  data() {
    return {
      title: '',
      project: '',
      description: ''
    }
  },
  methods: {
      createTask() {
          const payload = {
              title: this.title,
              project: this.project,
              description: this.description
          }
          this.$emit('createTask', payload)
          this.clearForm();
      },
      clearForm() {
          this.title = "";
          this.project = "";
          this.description = "";
      },
      backToHome() {
        router.push('/');
      }

  }
}
</script>