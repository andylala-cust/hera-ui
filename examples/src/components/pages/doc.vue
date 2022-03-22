<template>
    <div class="doc">
        <div class="nav">
            <ul class="list">
                <li
                    v-for="(list, index) in routerList"
                    :key="index"
                >{{list.name}}</li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { routerList } from '../../assets/js/routerList'

export default {
    name: "doc",
    data () {
        return {
            routerList
        }
    }
}
</script>

<style scoped lang="less">
.doc{
    .nav{
        overflow: auto;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 200px;
        padding-top: 20px;
        padding-bottom: 20px;
        &:after{
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: #cbcbe1;
        }
        li{
            padding: 0 20px;
            cursor: pointer;
            color: #444;
            font-size: 14px;
            line-height: 34px;
            transition: all .3s;
            &:hover{
                background-color: #ececf7;
                color: #1b63d9;
            }
        }
    }
    .content{
        padding-left: 220px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 20px;
    }
}
</style>
