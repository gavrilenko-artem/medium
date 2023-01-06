<template>
  <div class="register-wrapper">
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form @submit.prevent="onSubmit">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <router-link :to="{ name: 'register' }"
            >Forgot your password?</router-link
          >
          <button>Sign In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
  methods: {
    onSubmit() {
      console.log("submitted form");
    },
  },
};
</script>

<style>
@import "@/views/auth/auth.scss";
</style>
