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
    <span v-show="!(pageLeft <= 1)">...</span>
    <button
      v-for="num in pageCenter"
      :key="num"
      :class="{ active: currentPage === num + pageLeft }"
      @click="skipPage(num + pageLeft)"
      v-show="allPages !== 1"
    >
      {{ num + pageLeft }}
    </button>
    <span v-show="!(pageRight >= allPages)">...</span>
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
      if (this.allPages >= 7) {
        return 5;
      }
      return this.allPages;
    },
    //总页数
    allPages() {
      if (!this.total) return;
      return Math.ceil(this.total / this.pageSize);
    },
    //中间显示页数左边
    pageLeft() {
      const count = (this.pageCenter + 1) / 2;
      if (this.currentPage <= count) {
        return 1;
      }
      if (this.currentPage >= this.allPages - count) {
        return this.allPages - count * 2;
      }
      return this.currentPage - count;
    },
    //中间显示页数右边
    pageRight() {
      const count = (this.pageCenter + 1) / 2;
      return this.currentPage + count;
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
