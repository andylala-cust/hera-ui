<template>
  <div class="demo-page">
    <h3>图标</h3>
    <p class="tip">根据不同业务使用对应的图标</p>
    <h3>普通下载图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="download" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="download"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>表格下载图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="excel-download" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="excel-download"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>图片下载图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="image-download" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="image-download"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>PDF下载图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="pdf-download" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="pdf-download"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>图片分析图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="image-analyse" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="image-analyse"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>表格分析图标</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="excel-analyse" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="excel-analyse"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>右箭头</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="arrow-right" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="arrow-right"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
    <h3>提示</h3>
    <codeDemo>
      <template slot="demo">
        <he-icon type="tip" class="icon"></he-icon>
      </template>
      <template slot="code">
        <highlightjs
          language="html"
          code='<he-icon
    type="tip"
    class="icon"
></he-icon>'
        />
      </template>
    </codeDemo>
  </div>
</template>

<script>
export default {
  name: "iconPage",
};
</script>

<style scoped lang="less">
.icon:hover {
  color: #1b63d9;
}
</style>
