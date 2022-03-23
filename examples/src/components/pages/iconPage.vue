<template>
    <div class="icon-page">
        <he-icon
            type="download"
            class="icon"
        ></he-icon>
        <he-icon
            type="excel-download"
            class="icon"
        ></he-icon>
        <he-icon
            type="image-download"
            class="icon"
        ></he-icon>
        <he-icon
            type="image-analyse"
            class="icon"
        ></he-icon>
        <he-icon
            type="excel-analyse"
            class="icon"
        ></he-icon>
        <he-icon
            type="arrow-right"
            class="icon"
        ></he-icon>
    </div>
</template>

<script>
export default {
    name: "iconPage"
}
</script>

<style scoped lang="less">
.icon:not(:first-of-type){
    margin-left: 20px;
}
.icon:hover{
    color: #1b63d9;
}
</style>
