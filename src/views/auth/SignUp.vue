<template>
  <auth-form v-on:submit="onSubmit"></auth-form>
</template>

<script>
import AuthForm from '@/views/auth/components/AuthForm'

export default {
  name: "SignUp",
  components: {
    'auth-form': AuthForm
  },
  methods: {
    async onSubmit(formData) {
      const userInfo = {
        email: formData.username,
        password: formData.password
      }
      this.$store.dispatch("signup", userInfo).then((t) => {
        console.log('da')
        this.$router.push("/");
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