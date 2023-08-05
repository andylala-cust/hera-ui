<template>
  <div
    class="he-vertical-virtual-list"
    @scroll="handleScroll"
    ref="vList"
    :style="{ height: height + 'px' }"
  >
    <div
      :style="{
        position: 'relative',
        zIndex: '-1',
        height: phantomHeight,
      }"
      ref="phantom"
    ></div>
    <div
      :style="{
        position: 'absolute',
        top: '0',
        width: '100%',
        transform: getTransform(),
      }"
      ref="scroll"
    >
      <div
        v-for="(item, row) in viewDataSource"
        :key="item[rowKey]"
        :class="['he-vertical-virtual-item', 'row-' + (row + 1 + startIndex)]"
        :style="{
          height: rowHeight + 'px',
        }"
        :data-row="row + 1 + startIndex"
      >
        <slot :row="item" :rowIndex="row + startIndex"></slot>
      </div>
    </div>
  </div>
</template>

<script>
const VIEW_BOX_SIZE = 20;

export default {
  name: "HeVerticalVirtualList",
  data() {
    return {
      startIndex: 0,
      cachedPositions: [],
      estimateTotalHeight: 0,
    };
  },
  props: {
    dataSource: {
      type: Array,
      default: () => [],
    },
    rowHeight: {
      type: Number,
    },
    estimateRowHeight: {
      type: Number,
      default: 40,
    },
    rowKey: {
      required: true,
    },
    viewBoxSize: {
      type: Number,
      default: VIEW_BOX_SIZE,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  computed: {
    total() {
      return this.dataSource.length;
    },
    viewDataSource() {
      return this.dataSource.slice(this.startIndex, this.endIndex);
    },
    limit() {
      const limit = Math.ceil(
        this.height / (this.rowHeight || this.estimateRowHeight)
      );
      if (limit >= this.viewBoxSize) {
        return limit;
      }
      return this.viewBoxSize;
    },
    endIndex() {
      return Math.min(this.startIndex + this.limit, this.dataSource.length);
    },
    phantomHeight() {
      return `${
        this.rowHeight ? this.rowHeight * this.total : this.estimateTotalHeight
      }px`;
    },
  },
  methods: {
    handleEstimateTotalHeight() {
      this.estimateTotalHeight = (
        this.cachedPositions[this.cachedPositions.length - 1] || {}
      ).bottom;
    },
    initCachedPositions() {
      this.cachedPositions = [];
      for (let i = 0; i < this.total; ++i) {
        this.cachedPositions[i] = {
          index: i,
          height: this.estimateRowHeight,
          top: i * this.estimateRowHeight,
          bottom: (i + 1) * this.estimateRowHeight,
        };
      }
      this.handleEstimateTotalHeight();
    },
    updateCachedPositions() {
      const el = this.$refs.scroll.children;
      for (let i = 0, len = el.length; i < len; i++) {
        const index = this.startIndex + i;
        const rect = el[i].getBoundingClientRect();
        const { height } = rect;
        const oldHeight = this.cachedPositions[index].height;
        const dValue = height - oldHeight;
        if (dValue) {
          this.cachedPositions[index].bottom += dValue;
          this.cachedPositions[index].height = height;
        }
      }
      for (let i = 0, len = this.cachedPositions.length; i < len; i++) {
        const prev = this.cachedPositions[i - 1];
        if (prev) {
          this.cachedPositions[i].top = prev.bottom;
          this.cachedPositions[i].bottom =
            prev.bottom + this.cachedPositions[i].height;
        }
      }
      this.handleEstimateTotalHeight();
    },
    getTransform() {
      const { vList } = this.$refs;
      if (!vList) return;
      const { scrollTop } = vList;
      const { rowHeight } = this;
      if (this.rowHeight) {
        return `translate3d(0,${scrollTop - (scrollTop % rowHeight)}px,0)`;
      } else {
        return `translate3d(0,${
          this.startIndex >= 1
            ? this.cachedPositions[this.startIndex - 1].bottom
            : 0
        }px,0)`;
      }
    },
    handleScroll() {
      const { vList } = this.$refs;
      const { scrollTop } = vList;
      let currentStartIndex = 0;
      if (this.rowHeight) {
        currentStartIndex = Math.floor(scrollTop / this.rowHeight);
      } else {
        for (let i = 0, len = this.cachedPositions.length; i < len; i++) {
          if (scrollTop < this.cachedPositions[i].bottom) {
            currentStartIndex = i;
            break;
          }
        }
      }
      if (currentStartIndex !== this.startIndex) {
        this.startIndex = Math.max(0, currentStartIndex);
      }
    },
  },
  mounted() {
    this.initCachedPositions();
  },
  updated() {
    this.updateCachedPositions();
  },
};
</script>
