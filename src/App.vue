<script>
import { RouterLink, RouterView } from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import Home from './views/Home.vue'


export default {
  components: { RouterLink, RouterView, Login, Main,Home },
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
    <br>
    <RouterLink to="/home/main">toHome</RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>

</style>
