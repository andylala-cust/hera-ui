<template>
  <div class="demo-page">
    <h3>虚拟列表</h3>
    <p class="tip">优化长列表性能问题</p>
    <h3>定高虚拟列表</h3>
    <codeDemo>
      <template slot="demo">
        <he-vertical-virtual-list
          :dataSource="list_1"
          rowKey="key"
          :rowHeight="70"
          :height="400"
        >
          <div
            slot-scope="{ row }"
            style="height: 69px; border-bottom: 1px solid #ececf7"
            @click="handleClick(row)"
          >
            <h4 style="line-height: 49px; font-size: 16px; color: #222">
              item-{{ row.row }}
            </h4>
            <p style="font-size: 14px;line-height: 20px;color: #999;}">
              <span>{{ row.content }}</span>
            </p>
          </div>
        </he-vertical-virtual-list>
      </template>
      <template slot="code">
        <highlightjs language="html" :code="code_1" />
        <highlightjs
          language="javascript"
          code="<script>
export default: {
    data () {
        return: {
            list_1: [{row: ..., content: ...}, ...]
        }
    }
}
</script>"
        ></highlightjs>
      </template>
    </codeDemo>
    <h3>高度自适应虚拟列表</h3>
    <codeDemo>
      <template slot="demo">
        <he-vertical-virtual-list
          :dataSource="list_2"
          rowKey="key"
          :height="400"
        >
          <div
            slot-scope="{ row }"
            style="border-bottom: 1px solid #ececf7"
            @click="handleClick(row)"
          >
            <h4 style="line-height: 49px; font-size: 16px; color: #222">
              item-{{ row.row }}
            </h4>
            <p style="font-size: 14px;line-height: 20px;color: #999;}">
              <span>{{ row.content }}</span>
            </p>
            <p
              style=";margin-top: 12px;font-size: 14px;line-height: 20px;color: #999;}"
            >
              {{ row.paragraphs }}
            </p>
          </div>
        </he-vertical-virtual-list>
      </template>
      <template slot="code">
        <highlightjs language="html" :code="code_2" />
        <highlightjs
          language="javascript"
          code="<script>
export default: {
    data () {
        return: {
            list_2: [{row: ..., content: ..., paragraphs: ...}, ...]
        }
    }
}
</script>"
        ></highlightjs>
      </template>
    </codeDemo>
  </div>
</template>

<script>
import { V_LIST_DATA, V_LIST_DATA_2 } from "../../assets/mock/vList";

export default {
  name: "virtualListPage",
  data() {
    return {
      list_1: V_LIST_DATA,
      list_2: V_LIST_DATA_2,
      code_1:
        "<he-virtual-list\n" +
        '   :dataSource="list_1"\n' +
        '   rowKey="key"\n' +
        '   :rowHeight="70"\n' +
        '   :height="400"\n' +
        ">\n" +
        "   <div\n" +
        '       slot-scope="{row}"\n' +
        '       style="height: 69px;border-bottom: 1px solid #ececf7"\n' +
        '       @click="handleClick(row)"\n' +
        "   >\n" +
        '       <h4 style="line-height: 49px;font-size: 16px;color: #222">item-{{row.row}}</h4>\n' +
        '       <p style="font-size: 14px;line-height: 20px;color: #999;}">\n' +
        "           <span>{{row.content}}</span>\n" +
        "       </p>\n" +
        "   </div>\n" +
        "</he-virtual-list>",
      code_2:
        "<he-virtual-list\n" +
        '   :dataSource="list_1"\n' +
        '   rowKey="key"\n' +
        '   :height="400"\n' +
        ">\n" +
        "   <div\n" +
        '       slot-scope="{row}"\n' +
        '       style="border-bottom: 1px solid #ececf7"\n' +
        '       @click="handleClick(row)"\n' +
        "   >\n" +
        '       <h4 style="line-height: 49px;font-size: 16px;color: #222">item-{{row.row}}</h4>\n' +
        '       <p style="font-size: 14px;line-height: 20px;color: #999;}">\n' +
        "           <span>{{row.content}}</span>\n" +
        "       </p>\n" +
        "       <p\n" +
        '         style=";margin-top: 12px;font-size: 14px;line-height: 20px;color: #999;}"\n' +
        "       >\n" +
        "           {{ row.paragraphs }}\n" +
        "        </p>\n" +
        "   </div>\n" +
        "</he-virtual-list>",
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
  },
};
</script>

<style scoped lang="less"></style>
