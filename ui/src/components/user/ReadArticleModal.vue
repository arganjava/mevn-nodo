<template>
    <div>
        <b-button class="btn btn-warning" @click="modalShow = !modalShow">Edit</b-button>

        <b-modal id="modal-1" v-model="modalShow" ok-variant="danger" @ok="handleOk" title="Task Edit">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="form-group col-md-6">
                    <label for="articleId">Id</label>
                    <input type="text" class="form-control" v-model="id" name="_id" id="id" disabled />
                    </div>

                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="project">Project</label>
                        <input type="text" class="form-control" v-model="project" name="project" id="project" placeholder="Create a Task" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="assignee">Title</label>
                        <input type="text" class="form-control" v-model="title" name="title" id="title" placeholder="Assignee" />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="description">Description</label>
                      <textarea v-model="description" name="description" id="description" > </textarea>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
  import { BModal, BButton } from 'bootstrap-vue'

  export default {
    name: 'ReadArticleModal',
    components: {
        'b-modal': BModal,
        'b-button': BButton
    },
    props: ["editarticle"],
    data() {
      return {
        modalShow: false,
        id: this.editarticle._id,
        title: this.editarticle.title,
        project: this.editarticle.project,
        description: this.editarticle.description
      }
    },
    methods: {
        handleOk() {
            const payload = {
              id: this.id,
              title: this.title,
              project: this.project,
              description: this.description
            }
            this.$emit('editTask', payload)
        }
    }
  }
</script>