<template>
    <div class="he-panel">
        <he-panel-header>
            <slot name="header"></slot>
            <template slot="icon">
                <slot name="icon"></slot>
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
    }
}
</script>
