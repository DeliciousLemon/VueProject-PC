<template>
  <div class="pages">
    <button
      class="turn"
      @click="skipPage(currentPage - 1)"
      :disabled="currentPage === 1"
    >
      上一页
    </button>
    <button :class="{ active: currentPage === 1 }" @click="skipPage(1)">
      1
    </button>
    <span v-if="leftPage > 2">...</span>
    <button
      v-for="num in pageCenter"
      :key="num"
      :class="{ active: currentPage === num + leftPage - 1 }"
      @click="skipPage(num + leftPage - 1)"
    >
      {{ num + leftPage - 1 }}
    </button>
    <span v-if="rightPage > allPages-1">...</span>
    <button
      :class="{ active: currentPage === allPages }"
      @click="skipPage(allPages)"
      v-if="allPages !== 1"
    >
      {{ allPages }}
    </button>
    <button
      class="turn"
      @click="skipPage(currentPage + 1)"
      :disabled="currentPage === allPages"
    >
      下一页
    </button>
    <span>共{{ total }}条</span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: this.pageNo,
    };
  },
  watch: {
    currentPage() {
      this.$emit("handleSizeChange", this.currentPage);
    },
    //当前点击页
    //watch函数默认接收到新的值
    pageNo(pageNo) {
      this.currentPage = pageNo;
    },
  },
  props: {
    //数据总数
    total: {
      required: true,
    },
    //当前页数
    pageNo: {
      type: Number,
      default: 1,
    },
    //每页显示数据数量
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    //中间显示的页数
    pageCenter() {
      //如果总页数大于或等于7，则返回5
      //如果总页数小于7页，那么返回总页数-2（减掉默认显示的头尾）
      //合起来直接返回总页数-2
      return this.allPages - 2;
    },
    //总页数
    allPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    //左边页码
    leftPage() {
      //判断贴近左边的情况
      if (this.currentPage <= Math.ceil(this.pageCenter / 2) + 1) return 2;
      //判断贴近右边的情况
      if (this.currentPage >= this.allPages - Math.floor(this.pageCenter / 2))
        return this.allPages - this.pageCenter;
      return this.currentPage - Math.ceil(this.pageCenter / 2);
    },
    //右边页码
    rightPage() {
      return this.leftPage + this.pageCenter-1;
    },
  },
  methods: {
    skipPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="less" scoped>
.pages {
  margin: 0 auto;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pages button {
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
}
.pages .turn {
  width: 100px;
}
.active {
  background-color: rgb(2, 186, 241);
}
</style>
