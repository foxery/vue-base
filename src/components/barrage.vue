<template>
  <div class="barrage-box">
    <input
      type="text"
      placeholder=''
      v-model.trim='msg'
      @keyup.enter="setdata"
    >
    <span
      v-for="el in ku"
      :key="el.id"
      class="fly"
      :style="{top:el.top + 'px'}"
    >
      {{el.msg}}</span>
  </div>
</template>
<script>
/**模拟弹幕组件 */
export default {
  name: "Barrage",
  data() {
    return {
      msg: null, //缓存
      ku: [] //存取数据
    };
  },
  methods: {
    setdata() {
      if (this.msg) {
        let num = Math.random() * 300;
        let top = Math.floor(num);
        let obj = { msg: this.msg, top: top };
        this.ku.push(obj);
        this.msg = " ";
      }
    }
  }
};
</script>
<style scoped lang="scss">
.barrage-box{
    width: 100%;
    position: absolute;
    overflow: hidden;
    min-height: 50vh;
}
.fly {
  position: absolute;
  right: -100%;
  animation: go 30s ease-in infinite;
  white-space: nowrap;
}
@keyframes go {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}
</style>
