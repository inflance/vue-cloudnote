<template>
    <v-md-editor v-model="text" height="80vh" @input=""></v-md-editor>
</template>
  
<script>
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