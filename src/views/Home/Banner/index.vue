<template>
  <div></div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Banner",
  computed: {
    ...mapState({
      banners: (state) => state.home.banners,
    })
  },
  methods:{
      ...mapActions(["getBanners"])
  },
  mounted(){
      this.getBanners()
  }
};
</script>

<style lang="less" scoped>
</style>
