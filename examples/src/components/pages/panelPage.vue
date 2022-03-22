<template>
    <div class="panel-page">
        <he-panel
            title="基础面板"
            style="margin-bottom: 20px"
        ></he-panel>
        <he-panel
            title="带图标面板"
            is-icon
            style="margin-bottom: 20px"
        ></he-panel>
        <he-panel
            title="带图标及更多面板"
            is-icon
            is-more
            style="margin-bottom: 20px"
        ></he-panel>
        <he-panel
            title="自定义面板"
            style="margin-bottom: 20px"
        >
            <div class="title" slot="header">
                <h4>自定义面板</h4>
            </div>
        </he-panel>
        <he-panel
            title="其他面板"
            is-icon
        >
            <p slot="headerRight" style="font-size: 14px;color: #474762;">更多></p>
        </he-panel>
    </div>
</template>

<script>
export default {
    name: "panelPage"
}
</script>

<style scoped lang="less">

</style>
