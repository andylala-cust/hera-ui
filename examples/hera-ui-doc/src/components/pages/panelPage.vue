<template>
    <div class="demo-page">
        <h3>面板</h3>
        <p class="tip">将信息聚合在面板容器中展示</p>
        <h3>基础面板</h3>
        <codeDemo>
            <template slot="demo">
                <he-panel
                    title="基础面板"
                ></he-panel>
            </template>
            <template slot="code">
                <highlightjs language='html' code='<he-panel
    title="基础面板"
></he-panel>' />
            </template>
        </codeDemo>
        <h3>带图标面板</h3>
        <codeDemo>
            <template slot="demo">
                <he-panel
                    title="带图标面板"
                    is-icon
                ></he-panel>
            </template>
            <template slot="code">
                <highlightjs language='html' code='<he-panel
    title="带图标面板"
    is-icon
></he-panel>' />
            </template>
        </codeDemo>
        <h3>带图标及更多面板</h3>
        <codeDemo>
            <template slot="demo">
                <he-panel
                    title="带图标及更多面板"
                    is-icon
                    is-more
                ></he-panel>
            </template>
            <template slot="code">
                <highlightjs language='html' code='<he-panel
    title="带图标及更多面板"
    is-icon
    is-more
></he-panel>' />
            </template>
        </codeDemo>
        <h3>自定义头部面板</h3>
        <codeDemo>
            <template slot="demo">
                <he-panel
                    title="自定义头部面板"
                >
                    <div class="title" slot="header">
                        <h4>自定义头部面板</h4>
                    </div>
                </he-panel>
            </template>
            <template slot="code">
                <highlightjs language='html' code='<he-panel
    title="自定义头部面板"
>
    <div class="title" slot="header">
        <h4>自定义头部面板</h4>
    </div>
</he-panel>' />
            </template>
        </codeDemo>
        <h3>其他面板</h3>
        <codeDemo>
            <template slot="demo">
                <he-panel
                    title="其他面板"
                    is-icon
                >
                    <p slot="headerRight" style="display: flex;align-items: center;font-size: 14px;color: #474762;">
                        <span>更多</span>
                        <he-icon
                            type="arrow-right"
                        ></he-icon>
                    </p>
                </he-panel>
            </template>
            <template slot="code">
                <highlightjs language='html' code='<he-panel
    title="其他面板"
    is-icon
>
    <p slot="headerRight" style="display: flex;align-items: center;font-size: 14px;color: #474762;">
        <span>更多</span>
        <he-icon
            type="arrow-right"
        ></he-icon>
    </p>
</he-panel>' />
            </template>
        </codeDemo>
    </div>
</template>

<script>
export default {
    name: "panelPage"
}
</script>

<style scoped lang="less">

</style>
