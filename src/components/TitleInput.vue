<template>
    <div class="title">
        <el-input class="title-input" v-model="title" :placeholder="placeholder" maxlength="30" style="font-size:x-large;height: 75px;
    border: 0;">
        </el-input>
    </div>
    <div class="logo">

    </div>


</template>


<script>
export default {
    props: ["placeholder"],
    data() {
        return {
            title: ''
        }
    }
}
</script>
<style scoped>
.title {
    width: 50%;
}

.title>>>.el-input__wrapper {
    border: 0;
    box-shadow: none;
}
</style>