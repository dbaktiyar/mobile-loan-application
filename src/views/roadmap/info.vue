<template>
  <el-container>
    <!-- Aside -->
    <x-aside>
      <roadmap-list></roadmap-list>
    </x-aside>

    <!-- Main -->
    <el-main :class="$mq" justify="center">
      <!-- Toogle -->
      <div class="content-toggler">

        <el-tooltip v-if="isSVG" effect="dark" class="tool" content="Open Editor" placement="left">
          <i  @click="isSVG = false" class="el-icon-tickets"></i>
        </el-tooltip>

        <el-tooltip v-else effect="dark" class="tool" content="Generate tree" placement="left">
          <i  @click="isSVG = true">
            <icon-base width="28" height="29" viewBox="0 0 94 94">
              <tree-icon/>
            </icon-base>
          </i>
        </el-tooltip>
      </div>

      <div class="card">{{roadmap.name}}</div>

      <div class="main-content card" style="justify-content: flex-start;">
        <NodeDescription v-if="!isSVG"/>
        <roadmap-svg v-else/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import RoadmapSVG from "./../../components/RoadmapSVG";
import Aside from "@/components/Aside.vue";
import IconBase from "@/components/IconBase.vue";
import TreeIcon from "@/components/icons/tree-data-structure.vue";

export default {
  name: "RoadmapInfo",
  data() {
    return {
      isSVG: false
    };
  },
  created() {
    let roadmapId = this.$route.params.id;
    this.$store.dispatch("loadRoadmap", roadmapId);
  },
  computed: {
    roadmap() {
      return this.$store.getters.currentRoadmap;
    }
  },
  methods: {},
  components: {
    "roadmap-svg": RoadmapSVG,
    "roadmap-list": () => import("@/components/RoadmapList"),
    "x-aside": Aside,
    "tree-icon": TreeIcon,
    "icon-base": IconBase,
    NodeDescription: () => import("@/components/NodeDescription")
  }
};
</script>

<style lang="scss" scoped>
.el-container {
  height: calc(100% - 60px);
  background: #f8f8f8;
}

.el-main {
  position: relative;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;

  &.desktop {
    padding: 0px 200px 0 50px;
  }

  &.laptop {
    padding: 0px 100px 0 50px;
  }

  &.tablet {
    padding: 0px 75px 0 20px;
  }

  &.mobile {
    padding: 0px 100px 0 50px;
  }
}

.main-content {
  min-height: 100%;
  border-top: 1px solid #eee;
  border-radius: 5px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  background: white;
  padding-top: 20px;
  box-sizing: border-box;
}

.content-toggler {
  position: absolute;
  top: 12px;
  right: 2rem;
  display: flex;
  flex-direction: row;
  font-size: 28px;
  cursor: pointer;
}

.card {
  background: white;
  margin: 5px 0;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 9px 20px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>
