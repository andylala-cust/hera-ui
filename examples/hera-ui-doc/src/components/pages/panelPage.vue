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
                <pre v-highlightjs><code class="html">&lt;he-panel
    title="基础面板"
&gt;&lt;/he-panel&gt;</code></pre>
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
                <pre v-highlightjs><code class="html">&lt;he-panel
    title="带图标面板"
    is-icon
&gt;&lt;/he-panel&gt;</code></pre>
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
               <pre v-highlightjs><code class="html">&lt;he-panel
    title="带图标及更多面板"
    is-icon
    is-more
&gt;&lt;/he-panel&gt;</code></pre>
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
               <pre v-highlightjs><code class="html">&lt;he-panel
    title="自定义头部面板"
&gt;
    &lt;div class="title" slot="header"&gt;
        &lt;h4&gt;自定义头部面板&lt;/h4&gt;
    &lt;/div&gt;
&lt;/he-panel&gt;</code></pre>
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
               <pre v-highlightjs><code class="html">&lt;he-panel
    title="其他面板"
    is-icon
&gt;
    &lt;p slot="headerRight" style="font-size: 14px;color: #474762;"&gt;
        &lt;span&gt;更多&lt;/span&gt;
        &lt;he-icon
            type="arrow-right"
        &gt;&lt;/he-icon&gt;
    &lt;/p&gt;
&lt;/he-panel&gt;</code></pre>
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
