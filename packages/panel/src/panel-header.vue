<template>
    <div class="he-panel-header">
        <template v-if="!$slots.default">
            <div class="title">
                <h4>{{title}}</h4>
            </div>
            <div v-if="isIcon" class="icon-wrap">
                <i>
                    <he-icon type="download"></he-icon>
                </i>
                <p v-if="isMore" :class="[(isIcon && isMore) && 'is-more']">
                    <span>更多></span>
                </p>
            </div>
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
