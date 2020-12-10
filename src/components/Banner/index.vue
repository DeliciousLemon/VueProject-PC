<template>
  <div class="swiper-container"  ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in bannerList" :key="banner.id">
        <img v-lazy="banner.imgUrl" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Autoplay, Pagination, Navigation]);
export default {
  name: "Banner",
  props: {
    bannerList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    bannerList() {
      if (this.swiper) return;
      this.$nextTick(() => {
        this.setBanner();
      });
    },
  },
  methods: {
    setBanner() {
      this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper, {
          loop: true, // 循环模式选项
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
  mounted() {
    if(!this.bannerList.length) return
    this.setBanner();
  },
};
</script>

<style lang="less" scoped>
</style>
