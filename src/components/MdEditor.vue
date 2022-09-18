<template>
    <v-md-editor v-model="text" height="80vh" @input=""></v-md-editor>
</template>

<script>

// import readFile from "../utils/readfile.js";
// import { saveLocal } from "../utils/download.js";
export default {
    props:["text",],
    data() {
        return {

        };
    },methods(){
        return{
            consoleText:function(){
                alert(this.text);
            }
        };
    }
};
</script>
