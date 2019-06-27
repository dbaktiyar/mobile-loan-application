<template>
  <div id="app">
    <!--<app-header/>-->
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
// import AppHeader from "./components/AppHeader.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";

Vue.use(Element);

export default {
  name: "app"
  // components: {
  //   AppHeader
  // }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

/* TODO - Prevent text selection after double click */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f8f8f8;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
