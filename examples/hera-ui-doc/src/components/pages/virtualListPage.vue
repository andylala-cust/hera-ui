<template>
    <div class="demo-page">
        <h3>虚拟滚动</h3>
        <p class="tip">优化长列表性能问题</p>
        <h3>定高虚拟滚动</h3>
        <codeDemo>
            <template slot="demo">
                <div
                    style="height: 400px"
                >
                    <he-virtual-list
                        :dataSource="list_1"
                        rowKey="key"
                        :rowHeight="70"
                        :viewBoxSize="20"
                    >
                        <div
                            slot-scope="{row}"
                            style="height: 69px;border-bottom: 1px solid #ececf7"
                            @click="handleClick(row)"
                        >
                            <h4 :title="row.title || '无标题'" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;line-height: 49px;font-size: 16px;color: #222">{{row.title || '无标题'}}</h4>
                            <p style="font-size: 14px;line-height: 20px;color: #999;}">
                                <span style="margin-right: 20px;">{{row.media_name || '-'}}</span>
                                <span style="margin-right: 20px;">{{row.comment_count || 0}}评论</span>
                            </p>
                        </div>
                    </he-virtual-list>
                </div>
            </template>
            <template slot="code">
                <highlightjs language='html' :code="code_1" />
                <highlightjs language="javascript" code="<script>
export default: {
    data () {
        return: {
            list_1: [{title: ...,media_name: ...,comment_count: ...}, ...]
        }
    }
}
</script>"></highlightjs>
            </template>
        </codeDemo>
    </div>
</template>

<script>
import { V_LIST_DATA } from '../../assets/mock/vList'

export default {
    name: "virtualListPage",
    data () {
        return {
            list_1: V_LIST_DATA,
            code_1: '<div\n' +
                '   style="height: 400px"\n' +
                '>\n' +
                '   <he-virtual-list\n' +
                '       :dataSource="list_1"\n' +
                '       rowKey="key"\n' +
                '       :rowHeight="70"\n' +
                '       :viewBoxSize="20"\n' +
                '   >\n' +
                '       <div\n' +
                '           slot-scope="{row}"\n' +
                '           style="height: 69px;border-bottom: 1px solid #ececf7"\n' +
                '           @click="handleClick(row)"\n' +
                '       >\n' +
                '           <h4 :title="row.title || \'无标题\'" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;line-height: 49px;font-size: 16px;color: #222">{{row.title || \'无标题\'}}</h4>\n' +
                '           <p style="font-size: 14px;line-height: 20px;color: #999;}">\n' +
                '               <span style="margin-right: 20px;">{{row.media_name || \'-\'}}</span>\n' +
                '               <span style="margin-right: 20px;">{{row.comment_count || 0}}评论</span>\n' +
                '           </p>\n' +
                '       </div>\n' +
                '   </he-virtual-list>\n' +
                '</div>\n'
        }
    },
    methods: {
        handleClick (row) {
            console.log(row)
        }
    }
}
</script>

<style scoped lang="less">

</style>
