<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message: "hello vue change"
            };
        }
    }
</script>

<style scoped lang="less">
    @base: #1b8cd5;
    h1 {
        color: @base;
    }

</style>
