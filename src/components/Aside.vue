<template>
  <el-aside id="aside" style="width: auto">
    <div id="border-right" @mousedown="dragging = true;"></div>
    <div class="slot-container" :style="{'width': x+'px'}">
      <slot class="slot"></slot>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "Aside",
  props: {
    minWidth: {
      type: Number,
      default: 300
    }
  },
  data() {
    return {
      dragging: false,
      x: this.minWidth
    };
  },
  methods: {
    stopDrag(e) {
      this.dragging = false;
    },
    doDrag(event) {
      if (this.dragging) {
        this.x = event.clientX;
      }
    }
  },
  mounted() {
    window.addEventListener("mouseup", this.stopDrag);
    window.addEventListener("mousemove", this.doDrag);
  }
};
</script>

<style scoped>
.el-aside {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.slot-container::-webkit-scrollbar {
  width: 0 !important;
}

#border-right {
  width: 2px;
  height: 100%;
  background: #eee;
  min-height: 100%;
  order: 1;
  cursor: col-resize;
}

.slot {
  overflow: auto;
}

.slot-container {
  padding: 0 1rem;
}

</style>
