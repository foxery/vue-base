<template>
  <div>
    scroll组件：
    <scroll :contentArr="listData" :height="38" :lineNum="3"></scroll>
  </div>
</template>

<script>
import scroll from "@/components/scroll";

export default {
  name: "TextVeticalScroll",
  data() {
    return {
      listData:[
        {
          id:1,
          name:'aaaa'
        },
        {
          id:2,
          name:'bbbbbb'
        },
        {
          id:3,
          name:'ccccccccccc'
        },
        {
          id:4,
          name:'ddddddddddddddd'
        },
        {
          id:5,
          name:'eeeeeeeeeeeeeeeeee'
        },
        {
          id:6,
          name:'ffffffff'
        },
        {
          id:7,
          name:'gggg'
        }
      ]
    };
  },
  computed: {},
  components: {
    scroll
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
