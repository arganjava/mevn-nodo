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
                        <label for="title">Title</label>
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
  import { editArticle } from '../../services/ApiService'

  export default {
    name: 'EditModal',
    components: {
        'b-modal': BModal,
        'b-button': BButton
    },
    props: ["edittask"],
    data() {
      return {
        modalShow: false,
        id: this.edittask._id,
        title: this.edittask.title,
        project: this.edittask.project,
        description: this.edittask.description
      }
    },
    methods: {
      async handleOk() {
            const payload = {
              id: this.id,
              title: this.title,
              project: this.project,
              description: this.description
            }
            console.log("Payload for edit ",payload)
             await editArticle(payload)
            this.$emit('taskEdit', payload)
       }
    }
  }
</script>