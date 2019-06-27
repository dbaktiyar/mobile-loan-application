<template>
  <div class="roadmap-list">
    <!-- Toolbar -->
    <div class="card toolbar">
      <toolbar v-on:select="handleSelect($event)"/>
    </div>

    <!-- Tree-list -->
    <el-tree
            class="card"
            :draggable="isCreateMode"
            :render-content="renderContent"
            :data="data"
            :props="defaultProps"
    ></el-tree>
  </div>
</template>

<script>
  import Toolbar from "@/components/Toolbar.vue";

  export default {
    name: "RoadmapList",
    data() {
      return {
        isCreateMode: true,
        data: [
          {
            label: "Level one 1",
            children: [
              {
                label: "Level two 1-1",
                children: [
                  {
                    label: "Level three 1-1-1"
                  }
                ]
              }
            ]
          },
          {
            label: "Level one 2",
            children: [
              {
                label: "Level two 2-1",
                children: [
                  {
                    label: "Level one 2",
                    children: [
                      {
                        label: "Level two 2-1",
                        children: [
                          {
                            label: "Level three 2-1-1"
                          }
                        ]
                      },
                      {
                        label: "Level two 2-2",
                        children: [
                          {
                            label: "Level one 2",
                            children: [
                              {
                                label: "Level two 2-1",
                                children: [
                                  {
                                    label: "Level three 2-1-1"
                                  }
                                ]
                              },
                              {
                                label: "Level two 2-2",
                                children: [
                                  {
                                    label: "Level one 2",
                                    children: [
                                      {
                                        label: "Level two 2-1",
                                        children: [
                                          {
                                            label: "Level three 2-1-1"
                                          }
                                        ]
                                      },
                                      {
                                        label: "Level two 2-2",
                                        children: [
                                          {
                                            label: "Level three 2-2-1"
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                label: "Level two 2-2",
                children: [
                  {
                    label: "Level three 2-2-1"
                  }
                ]
              }
            ]
          },
          {
            label: "Level one 3",
            children: [
              {
                label: "Level two 3-1",
                children: [
                  {
                    label: "Level three 3-1-1"
                  }
                ]
              },
              {
                label: "Level two 3-2",
                children: [
                  {
                    label: "Level three 3-2-1"
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        },
        isSVG: false
      };
    },
    components: {
      "toolbar": Toolbar
    },
    methods: {
      handleSelect(e) {
        console.log(e)
      },
      append(isRootNode, data) {
        this.$prompt("Please input new node title", "New node", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel"
        })
                .then(({ value }) => {
                  const newChild = { label: value, children: [] };
                  if (isRootNode) {
                    this.data.push(newChild);
                  } else {
                    if (!data.children) {
                      this.$set(data, "children", []);
                    }
                    data.children.push(newChild);
                  }
                })
                .catch(() => {
                  this.$message({
                    type: "info",
                    message: "Input canceled"
                  });
                });
      },
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      renderContent(h, { node, data }) {
        if (this.isCreateMode) {
          return (
                  <span class="custom-tree-node">
                  <span>{node.label}</span>
                  <span>
                  <el-button
          size="mini"
          type="text"
          on-click={() => this.append(false, data)}
        >
        <i class="el-icon-circle-plus-outline" />
                  </el-button>
                  <el-button
          size="mini"
          type="text"
          on-click={() => this.remove(node, data)}
        >
        <i class="el-icon-remove-outline" />
                  </el-button>
                  </span>
                  </span>
        );
        }
        return (
                <span class="custom-tree-node">
                <span>{node.label}</span>
                </span>
      );
      }
    },
    computed: {
      roadmap() {
        return this.$store.getters.currentRoadmap;
      }
    }
  };
</script>

<style>
  .roadmap-list {
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }

  .el-button--mini {
    font-size: 16px;
  }

  .card {
    background: white;
    margin: 5px 0;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    font-size: 20px;
  }

  .el-tree {
    flex-grow: 1;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .el-tree::-webkit-scrollbar {
    display: none;
  }
</style>
