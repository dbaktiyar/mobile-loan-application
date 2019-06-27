<template>
  <div></div>
</template>

<script>
// import draggable from '../../node_modules/@svgdotjs/svg.draggable.js'

export default {
  name: "ParentNode",
  props: ["container", "x", "y", "text"],
  data() {
    return {};
  },
  computed: {},
  created() {
    if (this.container) {
      // let rect = this.container.rect(100, 20).attr({ fill: "#f06" });
      // rect.move(this.x, this.y)
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>