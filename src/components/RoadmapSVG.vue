<template>
  <div id="content">
    <!-- <parent-node
      v-for="node of nodess"
      :key="node.id"
      v-bind:x="node.x"
      v-bind:y="node.y"
    v-bind:container="svgElement"-->
    <!-- /> -->
  </div>
</template>

<script>
import SVG from "svg.js";
import ParentNode from "./ParentNode";
import Vue from "vue";

export default {
  name: "RoadmapSVG",
  components: {
    ParentNode
  },
  data() {
    return {
      svgElement: null,
      rect: null,
      nodess: []
    };
  },
  created() {
    // window.addEventListener("resize", this._.debounce(this.myEventHandler, 100));
  },
  mounted() {
    Vue.loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/svg.connectable.js/2.0.1/svg.connectable.min.js")
      .then(() => {
        var svg = new SVG("content").size("100%", "100%");
        this.$store.getters.currentRoadmapNodes(svg.node)
        var links = svg.group();
        var markers = svg.group();
        var nodes = svg.group();

        var g1 = nodes.group().move(svg.node.clientWidth / 2, 100);
        g1.rect(100, 20).attr({ fill: "#f06" });

        var g2 = nodes.group().move(svg.node.clientWidth / 2, 300);
        g2.rect(100, 20).attr({ fill: "#f06" });

        var g3 = nodes.group().move(svg.node.clientWidth / 2, 500);
        g3.circle(100).fill("#FF5252");

        g1.connectable(
          {
            container: links,
            markers: markers
          },
          g3
        ).setLineColor("#5D4037");

        g2.connectable(
          {
            container: links,
            markers: markers
          },
          g3
        ).setLineColor("#5D4037");
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    myEventHandler(e) {
      // let center = this.svgElement.node.clientWidth / 2;
      // this.rect.x(center - 50);
    },
    calcNodesPlaces(nodes, center) {
      const updatedNodes = nodes.map((node, i) => {
        node.x = center - 50;
        node.y = (i + 1) * 100;
        node.id = i;

        return node;
      });

      return updatedNodes;
    }
  }
};
</script>

<style scoped>
</style>