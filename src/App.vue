<template>
  <div id="app" class="m-0">
    <navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
