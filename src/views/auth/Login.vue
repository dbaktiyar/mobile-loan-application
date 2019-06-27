<template>
  <auth-form v-on:submit="onSubmit" v-bind:isLoginPage="true"></auth-form>
</template>

<script>
import AuthForm from '@/views/auth/components/AuthForm'

export default {
  name: "Login",
  components: {
    'auth-form': AuthForm
  },
  methods: {
    async onSubmit(formData) {
      const userInfo = {
        username: formData.username,
        password: formData.password
      };
      this.$store.dispatch("login", userInfo).then((t) => {
        this.$router.push("/applications");
      })
      .catch(errMessage => {
        this.$notify.error({
          title: 'Server error',
          message: errMessage,
          duration: 0
        });
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
