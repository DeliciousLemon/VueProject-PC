<template>
  <div class="box">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.box{
  background-color: rgb(8, 179, 179);
}
</style>
