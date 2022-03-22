<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import welCome from "./components/pages/welCome"

export default {
  name: 'App',
  components: {
    welCome
  }
}
</script>

<style>

</style>
