<template>
    <div class="header">
        Article <span> <button type="button" @click="goToCms()" class="btn btn-info">Create</button></span>
    </div>
</template>

<script>
import router from '../../routes'

export default {
        name: 'Header',
        data() {
            return {
                tasks: []
            }
        },
      methods: {
        goToCms() {
          router.push('cms');
        }
      }
    }
</script>