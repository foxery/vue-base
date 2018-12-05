<template>
  <transition name="toast-fade">
    <div
      class="toast"
      :class="objClass"
      v-show="isActive"
      ref="mToast"
    >
      <div class="toast-container">
        <div class="toast-content">{{content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data: () => ({
    list: [],
    content: null,
    type: null,
    isActive: false,
    timer: null,
    time: 2000,
    onShow: () => {},
    onHide: () => {}
  }),
  computed: {
    objClass() {
      // 样式'success, error, warning, default'
      return this.type ? "toast-" + this.type : null;
    }
  },
  methods: {
    // 显示
    show(params) {
      let { content, onShow, onHide, type, time } = params;
      this.type = type;
      this.time = time || 2000;
      this.content = content;
      this.onShow = onShow;
      this.onHide = onHide;

      this.isActive = true;
      this.setTimer();
    },

    // 隐藏
    hide() {
      this.isActive = false;
    },

    // 计时器
    setTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.isActive = false;
      }, this.time);
    },

    //设置位置
    setPosition() {
      var w = document.body.clientWidth;
      var h = window.screen.availHeight;
      var selfW = this.$refs.mToast.offsetWidth;
      var selfH = this.$refs.mToast.offsetHeight;
      if (selfW && selfH) {
        this.$refs.mToast.style.left = (w - selfW) / 2 + "px";
        this.$refs.mToast.style.top = (h - selfH) / 2 + "px";
      }
    }
  },
  watch: {
    isActive(val) {
      if (val && typeof this.onShow === "function") {
        this.onShow();
      } else if (!val && typeof this.onHide === "function") {
        this.onHide();
      }
    }
  },
  updated() {
    this.setPosition();
  }
};
</script>

<style lang="scss">
.toast {
  position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  display: block;
  border-radius: 4px;
  padding: 10px 15px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  max-width: 80%;
  text-align: center;
  z-index: 999;
  font-size: 14px;
}
.toast-success {
  color: #fff;
  background-color: #51a351;
}
.toast-error {
  color: #fff;
  background-color: #bd362f;
}
.toast-warning {
  color: #fff;
  background-color: #f89406;
}
.toast-container {
  vertical-align: middle;
}

.toast-fade-enter,
.toast-fade-leave-active {
  opacity: 0;
}
.toast-fade-leave-active,
.toast-fade-enter-active {
  transition: all 400ms cubic-bezier(0.36, 0.66, 0.04, 1);
}
</style>