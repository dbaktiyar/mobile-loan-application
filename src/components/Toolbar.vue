<template>
  <div class="toolbar">
    <el-tooltip effect="dark" class="tool" content="Add node" placement="bottom-start">
      <i class="el-icon-circle-plus-outline" @click="$emit('select', 'add')"/>>
    </el-tooltip>

    <el-tooltip effect="dark" class="tool" content="Share" placement="bottom-start">
      <i class="el-icon-share" @click="$emit('select', 'share')"/>>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style lang="scss" scoped>
.toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .tool {
    margin: 0 5px;
  }
}
</style>
