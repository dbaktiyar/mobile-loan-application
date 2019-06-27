<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>Navigator Two</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>Navigator Three</template>
            <el-menu-item-group>
              <template slot="title">Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Tom</span>
        </el-header>

        <el-main>
          <el-table :data="info" style="width: 100%">
            <el-table-column prop="appraisalTemplateTitle" label="APPRAISAL TEMPLATE TITLE" width="250">
            </el-table-column>

            <el-table-column prop="appraisalTemplateId" label="APPRAISAL TEMPLATE TITLE ID" width="250">
            </el-table-column>

            <el-table-column prop="description" label="DESCRIPTION">
            </el-table-column>

            <el-table-column prop="status" label="STATUS">
            </el-table-column>

            <el-table-column prop="uploaded" label="UPLOADED">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>

import ApplicationsService from '../../services/ApplicationsService'

export default {

  methods: {
    goToApplication (id) {
      this.$router.push({ path: `/application-info/${id}` })
    }
  },

  data () {
    return {

      info: [],
      items: [
        {
          text: 'Login',
          disabled: false,
          href: ''
        },
        {
          text: 'Applications',
          disabled: false,
          href: ''
        }
      ],
      headers: [
        {
          text: 'APPRAISAL TEMPLATE TITLE',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'APPRAISAL TEMPLATE TITLE ID', value: 'appraisalTemplateId', sortable: false },
        { text: 'DESCRIPTION', value: 'description', sortable: false },
        { text: 'STATUS  ', value: 'status', sortable: false },
        { text: 'ID', value: 'id', sortable: false },
        { text: 'UPLOADED', value: 'uploaded', sortable: false }
      ]
    }
  },

  async mounted () {
    await ApplicationsService.getApplications().then(res => {
      this.info = res.data
    })
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
