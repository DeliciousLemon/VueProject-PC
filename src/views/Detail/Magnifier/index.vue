<template>
  <div class="magnifier" @mousemove="mousePosition">
    <img
      class="image"
      :src="skuImageList && skuImageList[0] && skuImageList[0].imgUrl"
    />
    <!--
      .event这个div的作用：解决offset定位鼠标位置的闪烁问题
      问题原因： offset定位鼠标坐标是以最近定位父级元素为基准的，
      1.当鼠标刚移入外框（magnifier）时，此时最近父级定位元素是外框，获取的鼠标位置是以外框为基准的，然后计算出内框的位置（以鼠标为中心）.
      2.内框（glass）显示后，鼠标处于内框中，此时最近父级定位元素变为了内框，此时再移动鼠标触发mousemove事件，重新获取鼠标位置是以内框为基准了，再计算内框的位置（以鼠标x、y-100的位置为中心），导致内框变化了位置，鼠标就不在内框中了，就会再次进行第一步，陷入1->2->1->2的循环，从而出现闪烁的情况。
      解决方法：
      在外框的上面加一个透明的定位元素（层级最高），然后将内框的显示隐藏hover绑定在这个元素上，这样鼠标就会一直是以这个元素为最近定位父级元素进行计算，也就不会出现上述问题了。
      -->
    <div class="event"></div>
    <div
      class="glass"
      :style="{ left: glassLeft + 'px', top: glassTop + 'px' }"
    ></div>
    <div class="bigImage">
      <img
        :src="skuImageList && skuImageList[0] && skuImageList[0].imgUrl"
        :style="{
          position: 'absolute',
          left: -glassLeft * 2 + 'px',
          top: -glassTop * 2 + 'px',
        }"
        width="800px"
        height="800px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Magnifier",
  props: {
    skuImageList: {
      type: Array,
    },
  },
  data() {
    return {
      left: 0,
      top: 0,
      bigLeft: 0,
      bigRight: 0,
    };
  },
  computed: {
    glassLeft() {
      let left = this.left - 100;
      if (left < 0) {
        left = 0;
      }
      if (left > 200) {
        left = 200;
      }
      return left;
    },
    glassTop() {
      let top = this.top - 100;
      if (top < 0) {
        top = 0;
      }
      if (top > 200) {
        top = 200;
      }
      return top;
    },
  },
  methods: {
    mousePosition(e) {
      this.left = e.offsetX;
      this.top = e.offsetY;
    },
  },
};
</script>

<style lang="less" scoped>
.magnifier {
  width: 400px;
  height: 400px;
  position: relative;
}
.image {
  width: 400px;
  height: 400px;
  float: left;
}
.glass {
  display: none;
  width: 200px;
  height: 200px;
  background-color: rgba(9, 204, 238, 0.466);
  position: absolute;
}
.event {
  width: 400px;
  height: 400px;
  position: absolute;
  border: 1px solid rgb(31, 161, 111);
  z-index: 4;
}
.bigImage {
  display:none;
  width: 400px;
  height: 400px;
  position: absolute;
  left: 400px;
  overflow: hidden;
}
.event:hover ~ .glass {
  display: block;
}
.event:hover ~ .bigImage {
  display: block;
}
</style>
