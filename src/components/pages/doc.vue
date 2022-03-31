<template>
    <div class="doc">
        <div class="nav">
            <div class="list">
                <router-link
                    v-for="(route, index) in routerList"
                    :key="index"
                    :to="route.value"
                    exact
                >{{route.name}}</router-link>
            </div>
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
        a{
            display: block;
            height: 40px;
            padding-left: 20px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
            text-decoration: none;
            &:hover{
                color: #1b63d9;
            }
            &.router-link-active{
                background-color: #f7f7fc;
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
