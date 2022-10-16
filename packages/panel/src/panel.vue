<template>
    <div class="he-panel">
        <he-panel-header @moreClick="moreClick" @iconClick="iconClick">
            <slot name="header"></slot>
            <template slot="icon">
                <slot name="icon"></slot>
            </template>
            <template slot="headerRight">
                <slot name="headerRight"></slot>
            </template>
        </he-panel-header>
        <he-panel-content>
            <slot name="content"></slot>
        </he-panel-content>
    </div>
</template>

<script>
export default {
    name: 'HePanel',
    provide () {
        return {
            title: this.title,
            isIcon: this.isIcon,
            isMore: this.isMore
        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        isIcon: {
            type: Boolean,
            default: false
        },
        isMore: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        moreClick () {
            this.$emit('moreClick')
        },
        iconClick () {
            this.$emit('iconClick')
        }
    }
}
</script>
