<template>
    <div class="home">
        <div class="header">
            <div class="top">
                <h1>Hera-Ui</h1>
                <div class="right">
                    <a href="https://github.com/andylala-cust/hera-ui">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA0NjgwOTI2NTgxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMzIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAxLjU2MjUiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik0wIDUxNS44NzJDMCA3NDEuMTIgMTQ0LjM1MiA5MzIuNjQgMzQ1LjU4NCAxMDAyLjk3NmMyNy4xMiA2Ljg5NiAyMi44OTYtMTIuNTQ0IDIyLjg5Ni0yNS42MTZsMC04OS40MjRjLTE1Ni40NjQgMTguMzA0LTE2Mi43MzYtODUuMjgtMTczLjI5Ni0xMDIuNjA4LTIxLjMxMi0zNi4yNzItNzEuMzkyLTQ1LjQ4OC01Ni40MzItNjIuNzUyIDM1LjY5Ni0xOC40MzIgNzEuOTY4IDQuNjA4IDExNCA2Ni43ODQgMzAuNDY0IDQ1LjA3MiA4OS42NjQgMzcuNTA0IDExOS45MzYgMjkuOTM2IDYuNjI0LTI3LjA1NiAyMC43MDQtNTEuMiAzOS45NTItNzAuMDgtMTYxLjg4OC0yOC44MTYtMjI5LjU1Mi0xMjcuNzkyLTIyOS41NTItMjQ1LjQ0IDAtNTYuOTQ0IDE4LjgtMTA5LjUwNCA1NS44MDgtMTUxLjg1Ni0yMy40MDgtNjkuODg4IDIuMjU2LTEyOS40NzIgNS42MTYtMTM4LjQxNiA2Ni45MjgtNi4wOCAxMzYuNTEyIDQ3Ljg3MiAxNDEuODcyIDUyLjEyOCAzOC4xMjgtMTAuMTkyIDgxLjUyLTE1Ljc2IDEzMC4wNjQtMTUuNzYgNDguODQ4IDAgOTIuNDggNS42MzIgMTMwLjc4NCAxNS45NTIgMTMuMDcyLTkuOTUyIDc3LjU4NC01Ni4xOTIgMTM5LjgyNC01MC41NDQgMy4zMTIgOC44NDggMjguNDE2IDY3LjE2OCA2LjQgMTM2LjAxNiAzNy4zNzYgNDIuNDY0IDU2LjM1MiA5NS4yNjQgNTYuMzUyIDE1Mi40OCAwIDExNy44ODgtNjcuOTUyIDIxNy4wMDgtMjMwLjUyOCAyNDUuNiAyNy4xNTIgMjYuNzM2IDQzLjk4NCA2My45MiA0My45ODQgMTA1LjA0bDAgMTI5LjcxMmMwLjg2NCAxMC4zMzYgMCAyMC43MzYgMTcuMzYgMjAuNzM2IDIwNC4xMTItNjguNzUyIDM1MS4xMi0yNjEuNzEyIDM1MS4xMi00ODkuMDA4QzEwMzEuNzQ0IDIzMC45NiA4MDAuNzg0IDAgNTE1Ljg3MiAwIDIzMC45NiAwIDAgMjMwLjk2IDAgNTE1Ljg3MkwwIDUxNS44NzJ6TTAgNTE1Ljg3MiIgcC1pZD0iNDI3MSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvc3ZnPg==" alt="">
                    </a>
                </div>
            </div>
            <div class="desc">
                <h4>Hera Ui</h4>
                <p>A Vue.js UI Kit for Web</p>
                <div class="btn" @click="handleClick">起步</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "welCome",
    methods: {
        handleClick () {
            this.$router.push('/doc')
        }
    }
}
</script>

<style scoped lang="less">
.home{
    .header{
        padding: 24px 96px 48px;
        background-color: #5FC3E4;
        background-image: linear-gradient(120deg, #E55D87, #5FC3E4);
        .top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            h1{
                font-size: 20px;
                color: #fff;
            }
            a{
                display: block;
                width: 19px;
                height: 19px;
            }
            img{
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        .desc{
            margin-top: 46px;
            text-align: center;
            color: #fff;
            h4{
                margin-bottom: 20px;
                font-size: 40px;
            }
            p{
                margin-bottom: 16px;
                opacity: .7;
                font-size: 18px;
            }
            .btn{
                display: inline-block;
                min-width: 82px;
                padding: 12px 16px;
                color: rgba(255, 255, 255, 0.8);
                background-color: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.2);
                border-style: solid;
                border-width: 1px;
                border-radius: 4px;
                transition: color 0.2s, background-color 0.2s, border-color 0.2s;
                cursor: pointer;
                &:hover{
                    color: rgba(255, 255, 255, 0.9);
                    text-decoration: none;
                    background-color: rgba(255, 255, 255, 0.2);
                    border-color: rgba(255, 255, 255, 0.3);
                }
            }
        }
    }
}
</style>
