<template>
  <div class="base-button">
    <el-button :type="type" @click="$emit('click')">
      <div class="svg-container">
        <slot></slot>
      </div>
      <div class="title">{{title}}</div>
    </el-button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Click me!'
    },
    type: {
        type: String,
        default: ''
    }
  },
  name: "BaseButton"
};
</script>
<style lang="scss" scoped>

  .base-button {
    & /deep/ .el-button {
      width: 100%;
      padding: 10px;
      position: relative;
      min-height: 40px;

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        .svg-container {
          position: absolute;
          top: 10px;
          left: 10px;
        }
      }
    }
  }

</style>
