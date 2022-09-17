<template>
    <div class="title">
        <el-input class="title-input" :value="modleValue" @input="handleInput" :placeholder="placeholder" maxlength="30"
            style="font-size:x-large;height: 75px;
    border: 0;">
        </el-input>
    </div>
    <div class="logo">

    </div>


</template>


<script>
export default {
    emits: [
        'update:modelValue',
    ],
    props: {
        value:String,
        placeholder: String
    },
    data() {
        return {
        }
    }, methods: {
        handleInput() {
            this.$emit('update:modelValue', this.modleValue);
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