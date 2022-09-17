<script>
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'

export default {
  components: { RouterLink, RouterView, Login, Main },
  data() {
    return {
      text: "",
    }
  }
}
</script>


<template>
  <div class="common-layout">

    <RouterLink to="/main">toMain</RouterLink>
    <br>
    <RouterLink to="/login">toLogin</RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
