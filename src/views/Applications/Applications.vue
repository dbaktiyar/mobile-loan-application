<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <!--<MainHeader></MainHeader>-->
    <!--<v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        &lt;!&ndash;<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>&ndash;&gt;
        <div>
          <v-layout justify-space-around>
            <span class="group pa-2">
              <v-icon x-large>people</v-icon>
            </span>
          </v-layout>
        </div>
        <div>
          <v-breadcrumbs :items="items" divider=">">
            <template v-slot:item="props">
              <a :href="props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text.toUpperCase() }}</a>
            </template>
          </v-breadcrumbs>
          <v-toolbar-title>{{ 'Applications'.toUpperCase() }}</v-toolbar-title>
        </div>

      </v-toolbar>-->
     <!-- <v-content>
        <div>
          <v-data-table
            :items="info"
            class="elevation-1"
            hide-actions
            :headers="headers"
          >
            <template v-slot:items="props">
              <tr  @click="goToApplication(props.item.id)">
                <td>{{ props.item.appraisalTemplateTitle }}</td>
                <td class="text-xs-right">{{ props.item.appraisalTemplateId }}</td>
                <td class="text-xs-right">{{ props.item.description }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-right">{{ props.item.id }}</td>
                <td class="text-xs-right">{{ props.item.uploaded }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </v-content>-->
    <el-container style="height: 1000px; border: 1px solid #eee">

      <el-container>
        <el-header style="text-align: right; font-size: 12px">

          <div>
<!--            <v-breadcrumbs :items="items" divider=">">-->
<!--              <template v-slot:item="props">-->
<!--                <a :href="props.item.href" :class="[props.item.disabled && 'disabled']">{{ props.item.text.toUpperCase() }}</a>-->
<!--              </template>-->
<!--            </v-breadcrumbs>-->
            <v-toolbar-title>{{ 'Applications'.toUpperCase() }}</v-toolbar-title>

            <el-dropdown>
              <i class="el-icon-user" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Sign out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>Tom</span>
          </div>

<!--          <el-dropdown>-->
<!--            <i class="el-icon-user" style="margin-right: 15px"></i>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>Sign out</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--          <span>Tom</span>-->
        </el-header>

        <el-main style="padding: 0">
          <el-table :data="info" height="100%" style="width: 100%">
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
    <!--</v-app>-->
  </div>

</template>

<script>

// import MainHeader from '../../components/MainHeader'
import ApplicationsService from '../../services/ApplicationsService'

export default {
  components: {
    // MainHeader
  },

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
    background-color: #48a0d6;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #ffffff;
  }
</style>
