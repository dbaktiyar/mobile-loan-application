<template>
  <div class="auth-container">
    <div class="auth-card" :class="$mq">
      <el-form ref="authForm" :model="authForm" class="auth-form">
       <!-- <rm-button :title="title + ' with Google'">
          <icon-base viewBox="0 0 500 550">
            <google-icon></google-icon>
          </icon-base>
        </rm-button>-->

        <!--<divider></divider>-->

        <img class="cbs-auth-logo slds-align--absolute-center" alt="Vue logo" src="../../../assets/cbs-logo.svg">

        <!-- Username -->
        <div>
          <el-form-item
            prop="username"
            :rules="[
            { required: true, message: 'Please input Username', trigger: 'blur' },
            { min: 4, message: 'Username should contain at least 4 characters', trigger: 'blur' }
          ]"
          >
            <icon-base class="svg-container svg-container__left" viewBox="0 0 32 32">
              <mail-icon/>
            </icon-base>
            <el-input
              ref="username"
              name="username"
              placeholder="Username"
              type="text"
              auto-complete="on"
              v-model="authForm.username"
            />
          </el-form-item>
        </div>

        <!-- Password -->
        <div>
          <el-tooltip
            v-model="capsTooltip"
            class="item"
            content="Caps lock is On"
            placement="right"
            ref="tooltip"
            manual
          >
            <el-form-item
              prop="password"
              :rules="[
            { required: true, message: 'Please input Password', trigger: 'blur' },
            { min: 5, message: 'Username should contain at least 5 characters', trigger: 'blur' }
          ]"
            >
              <icon-base
                @click="showPwd"
                class="svg-container svg-container__left"
                viewBox="0 5 60 50"
              >
                <password-icon/>
              </icon-base>
              <el-input
                ref="password"
                v-model="authForm.password"
                placeholder="Password"
                name="password"
                :type="passwordType"
                :key="passwordType"
                auto-complete="on"
                @keyup.enter.native="onSubmit"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                v-validate="'required'"
              />
              <span @click="showPwd">
                <icon-base
                  v-if="passwordType === 'password'"
                  class="svg-container svg-container__right"
                  viewBox="0 0 130 45"
                >
                  <closed-eye-icon @click="showPwd"/>
                </icon-base>
                <icon-base
                  v-else
                  class="svg-container svg-container__right"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <open-eye-icon @click="showPwd"/>
                </icon-base>
              </span>
            </el-form-item>
          </el-tooltip>
        </div>

        <rm-button class="submit-button" type="primary" v-on:click="onSubmit" :title="title"></rm-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import BaseButton from "@/components/BaseButton";
// import Divider from "@/components/Divider";
import IconBase from "@/components/IconBase";
// import GoogleIcon from "@/components/icons/google";
import PasswordIcon from "@/components/icons/password";
import MailIcon from "@/components/icons/mail";
import OpenEyeIcon from "@/components/icons/eye-open";
import ClosedEyeIcon from "@/components/icons/eye";

export default {
  name: "AuthForm",
  props: {
    isLoginPage: {
      type: Boolean
    }
  },
  components: {
    "rm-button": BaseButton,
    // divider: Divider,
    "icon-base": IconBase,
    // "google-icon": GoogleIcon,
    "password-icon": PasswordIcon,
    "mail-icon": MailIcon,
    "closed-eye-icon": ClosedEyeIcon,
    "open-eye-icon": OpenEyeIcon
  },
  mounted() {
    this.$refs.tooltip.referenceElm.setAttribute("tabindex", -1);
  },
  data() {
    return {
      authForm: {
        username: "",
        password: ""
      },
      capsTooltip: false,
      passwordType: "password",
      submitted: false
    };
  },
  computed: {
    title() {
      return this.isLoginPage ? "Log in" : "Sign up";
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.$refs["authForm"].validate(valid => {
        if (valid) {
            this.$emit("submit", this.authForm);
        } else {
            return false;
        }
      });
    },
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        this.capsTooltip =
          (shiftKey && (key >= "a" && key <= "z")) ||
          (!shiftKey && (key >= "A" && key <= "Z"));
      }
      if (key === "CapsLock" && this.capsTooltip === true) {
        this.capsTooltip = false;
      }
    },
    showPwd() {
      this.passwordType = this.passwordType === "password" ? "" : "password";
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.my-title {
  &.mobile {
    font-size: 10em;
  }
  &.desktop {
    font-size: 3em;
  }
}

.auth-container {
  min-height: 100%;
  width: 100%;
  background-color: #fafafa;
  overflow: hidden;

  .auth-card {
    margin: 180px auto 20px;
    width: 320px;
    box-shadow: 0 8px 60px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    background: #fff;
    padding: 50px;

    .cbs-auth-logo {
      margin-bottom: 25px;
      width: 200px;
      height: 121px;
    }

    &.mobile {
      padding: 20px;
      box-sizing: border-box;
    }

    & /deep/ .el-form-item__content {
      .svg-container {
        position: absolute;
        top: 50%;
        z-index: 1;
        transform: translateY(-50%);

        &__left {
          left: 10px;
        }

        &__right {
          right: 10px;
        }
      }

      .el-input {
        input {
          padding: 0 40px;
        }
      }
    }

    .submit-button {
      margin-top: 2rem;
    }
  }
}
</style>
