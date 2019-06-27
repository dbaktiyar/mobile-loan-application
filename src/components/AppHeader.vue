<template>
  <el-header
    style="height: 60px; border-bottom: 1px solid #eee; justify-content: space-between;
    align-items: center; padding: 0 2%;"
  >
    <div @click="goTo('/')" id="logo">Logo</div>
    <el-button v-if="showLoginButton" class="login-button" @click="goTo('/login')" plain>Log in</el-button>
    <el-button v-if="showSignButton" class="login-button" @click="goTo('/signup')" plain>Sign up</el-button>
    <el-dropdown v-if="isLoggedIn" trigger="click" @command="handleClick">
      <div>
        <icon-base width="35" height="35"><profile-icon/></icon-base>
      </div>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="goToProfile">Profile</el-dropdown-item>
        <el-dropdown-item command="logOut">Log out</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Dropdown from "./Dropdown.vue";
import IconBase from "@/components/IconBase.vue"
import ProfileIcon from "@/components/icons/profile.vue"

export default {
  name: "AppHeader",
  data() {
    return {
      showLoginButton: false,
      showSignButton: false,
      isOpen: false,
      svgFilepath: '/client/src/assets/' + 'profile-icon.svg'
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.updateButtons();
  },
  watch: {
    $route(to, from) {
      this.updateButtons();
    }
  },
  methods: {
    goToProfile(e) {
      // this.$router.push(`user/${this.user.id}`);
    },
    goTo(path) {
      this.$router.push(path);
    },
    logOut() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.replace("/login"))
        .catch(err => location.reload());
    },
    handleClick(e) {
      this[e]();
    },
    openDropdown() {
      this.isOpen = !this.isOpen;
    },
    updateButtons() {
      this.showSignButton =
        this.$router.currentRoute.path === "/login" && !this.isLoggedIn;
      this.showLoginButton =
        this.$router.currentRoute.path !== "/login" && !this.isLoggedIn;
    }
  },
  components: {
    Dropdown,
    'icon-base': IconBase,
    'profile-icon': ProfileIcon
  }
};
</script>

<style scoped>
.el-header {
  display: flex;
  background: white;
}

#logo {
  width: 100px;
  height: 80%;
  border: 1px solid grey;
  border-radius: 5%;

  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 18px;
  align-self: center;
}

.login-button {
  border: 1px solid #0e69c7;
  color: #1c6fc5;
}
</style>
