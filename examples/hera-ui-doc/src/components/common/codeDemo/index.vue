<template>
  <div class="code-demo">
    <div class="demo">
      <slot name="demo"></slot>
    </div>
    <div :class="['code', toggleFold && 'is-hide']" ref="code">
      <slot name="code"></slot>
    </div>
    <div class="footer">
      <span style="margin-right: 12px" @click="handleCopy">复制代码</span>
      <span @click="handleFold">{{ foldText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      toggleFold: true,
    };
  },
  computed: {
    foldText() {
      return (this.toggleFold ? "显示" : "隐藏") + "代码";
    },
  },
  methods: {
    handleCopy() {
      this.$copyText(this.$refs.code.textContent).then(
        function () {
          alert("复制成功");
        },
        function () {
          alert("复制失败");
        }
      );
    },
    handleFold() {
      this.toggleFold = !this.toggleFold;
    },
  },
};
</script>

<style scoped lang="less">
.code-demo {
  margin-bottom: 20px;
  border: 1px solid #eaeefb;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 8px 0 rgb(232, 237, 250, 0.6),
      0 2px 4px 0 rgb(232, 237, 250, 0.5);
  }
  .demo {
    padding: 20px;
  }
  .code {
    overflow: hidden;
    &.is-hide{
      height: 0;
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 12px 20px;
    border-top: 1px solid #eaeefb;
    color: #333;
    font-size: 14px;
    span {
      color: #1b63d9;
      cursor: pointer;
    }
  }
}
</style>
