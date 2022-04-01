<template>
    <div class="he-panel-header">
        <template v-if="!$slots.default">
            <div class="title">
                <h4>{{title}}</h4>
            </div>
            <div v-if="isIcon && !$slots.headerRight" class="icon-wrap">
                <i>
                    <he-icon type="download" v-if="!$slots.icon"></he-icon>
                    <slot name="icon"></slot>
                </i>
                <p v-if="isMore" :class="[(isIcon && isMore) && 'is-more']">
                    <span>更多</span>
                    <he-icon
                        type="arrow-right"
                    ></he-icon>
                </p>
            </div>
            <slot v-if="$slots.headerRight" name="headerRight"></slot>
        </template>
        <slot v-else></slot>
    </div>
</template>

<script>
export default {
    name: "HePanelHeader",
    inject: ['title', 'isIcon', 'isMore']
}
</script>
