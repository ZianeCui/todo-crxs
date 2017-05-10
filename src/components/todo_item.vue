<script>
    export default {
        data() {
            return {
                counter: 0
            }
        },
        methods() {

        }
    }
</script>

<template>
    <div class="m-todoItem">
        <div class="check">勾选</div>
        <span>非输入状态</span>
        <input type="text">
        <span class="delete">删除</span>
    </div>
</template>

<style lang="sass">
    .m-todoItem {
        .check {
            color: #eee;
        }
    }
</style>
