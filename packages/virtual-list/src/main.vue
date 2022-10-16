<template>
    <div
        class="he-virtual-list"
        @scroll="handleScroll"
        ref="vList"
    >
        <div
            :style="{
                position: 'relative',
                height: total * rowHeight + 'px'
            }"
        >
            <div
                v-for="(item, row) in viewDataSource"
                :key="item[rowKey]"
                :class="[
                    'he-virtual-item',
                    'row-' + (row + 1 + startIndex)
                ]"
                :style="{top: (row + startIndex) * rowHeight + 'px', height: rowHeight + 'px'}"
            >
                <slot
                    :row="item"
                    :rowIndex="row + startIndex"
                ></slot>
            </div>
        </div>
    </div>
</template>

<script>
const VIEW_BOX_SIZE = 20

export default {
    name: 'HeVirtualList',
    data () {
        return {
            startIndex: 0,
            endIndex: VIEW_BOX_SIZE
        }
    },
    props: {
        dataSource: {
            type: Array,
            default: () => []
        },
        rowHeight: {
            type: Number,
            default: 30
        },
        rowKey: {
            required: true
        },
        viewBoxSize: {
            type: Number,
            default: VIEW_BOX_SIZE
        }
    },
    computed: {
        total () {
            return this.dataSource.length
        },
        viewDataSource () {
            return this.dataSource.slice(this.startIndex, this.endIndex)
        }
    },
    methods: {
        handleScroll () {
            const { rowHeight, startIndex } = this
            const { vList } = this.$refs
            const { scrollTop } = vList
            const currentStartIndex = Math.floor(scrollTop / rowHeight)
            if (currentStartIndex !== startIndex) {
                this.startIndex = currentStartIndex
                this.endIndex = Math.min(currentStartIndex + this.viewBoxSize, this.dataSource.length)
            }
        }
    }
}
</script>
