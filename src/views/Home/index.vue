<template>
  <div>
    <Nav />
    <Banner />
  </div>
</template>

<script>
import Nav from "@components/Nav";
import Banner from "./Banner";
export default {
  name: "Home",
  components: {
    Nav,
    Banner,
  },
};
</script>

<style lang="less" scoped>
</style>
