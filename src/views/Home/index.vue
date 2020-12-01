<template>
  <div>
    <Nav />
    <BannerSwiper />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Floor />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import Nav from "@components/Nav";
import BannerSwiper from "./BannerSwiper";
import Brand from "./Brand/Brand"
import Floor from "./Floor/Floor"
import Like from "./Like/Like"
import Rank from "./Rank/Rank"
import TodayRecommend from "./TodayRecommend/TodayRecommend"
export default {
  name: "Home",
  components: {
    Nav,
    BannerSwiper,
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
  },
};
</script>

<style lang="less" scoped>
</style>
