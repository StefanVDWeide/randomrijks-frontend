<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;700&display=swap");

body {
  background-color: #000;
  color: #fff;
  font-family: "Kanit", sans-serif;
}

.page-section {
  padding: 3rem;
}</style
>>
