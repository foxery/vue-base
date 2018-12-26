<template>
  <div>
    <div class="wrap">
      <!--大于180，则class=clip-auto circle，否则：circle-->
      <div
        class="circle"
        :class="{'clip-auto':curProcessingDeg>180}"
      >
        <!--度数为：当前进度*3.6-->
        <div
          class="percent left"
          :style="{transform:'rotate(' + curProcessingDeg + 'deg)'}"
        ></div>
        <!--大于180，则class=percent right，否则为percent right wth0-->
        <div
          class='percent right'
          :class="{'wth0':curProcessingDeg<=180}"
        ></div>
      </div>
      <div class="num">
        <template>
          <template v-if="curProcessing<99"><span>{{curProcessing}}</span>%</template>
          <img
            src="../assets/img/done.png"
            alt=""
            v-else
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssLoading",
  data() {
    return {
      curProcessingDeg: 0,
      curProcessing: 0
    };
  },
  watch: {
    curProcessing: function(val) {
      this.curProcessingDeg = val * 3.6;
    }
  },
  computed: {},
  components: {},
  mounted() {
    this.processing();
  },
  methods: {
    processing: function() {
      this.processingTimer = setTimeout(() => {
        if (this.curProcessing < 100) {
          //等待接口成功返回
          this.curProcessing++;
          this.processing();
        }
      }, 100);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.wrap {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.circle,
.percent {
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.wrap {
  top: 0;
  left: 0;
  background-color: #1d95cc;
}
.circle {
  border: 4px solid #1d95cc;
  clip: rect(0, 60px, 60px, 30px);
}
.clip-auto {
  clip: rect(auto, auto, auto, auto);
}
.percent {
  top: -4px;
  left: -4px;
}
.left,
.right {
  border: 4px solid #f74f43;
}
.left {
  clip: rect(0, 30px, 60px, 0);
}
.right {
  clip: rect(0, 60px, 60px, 30px);
}
.wth0 {
  width: 0;
}
.num {
  position: absolute;
  width: 52px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  font-size: 14px;
  left: 4px;
  top: 4px;
  border-radius: 50%;
  color: #333;
  background: white;
  z-index: 1;
  font-weight: 300;
  img {
    height: 22px;
    display: inline-block;
    margin-top: 16px;
  }
}
</style>
