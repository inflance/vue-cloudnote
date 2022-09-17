<script>
//import TitleInput from '../components/TitleInput.vue';
import MdEditor from '../components/MdEditor.vue';
import HeadIcon from '../components/HeadIcon.vue';
import ScroBar from '../components/ScroBar.vue';
import AsideNav from '../components/AsideNav.vue';
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: { /*TitleInput,*/ MdEditor, HeadIcon, ScroBar, AsideNav, RouterLink, RouterView },
    data() {
        return {
            text: "",
            classifiData: [
                { classifiID: 1, classifiName: '线性代数' },
                { classifiID: 2, classifiName: '线性代数' },
                { classifiID: 3, classifiName: '线性代数' },
                { classifiID: 4, classifiName: '线性代数' },
                { classifiID: 5, classifiName: '线性代数' },
                { classifiID: 6, classifiName: '线性代数' },
            ],
            noteData: [
                { classificID: '1', noteID: '1', noteTitle: "线性代数", noteContent: "121212121", descTime: '2022', createTime: '2022' }
            ],
            currentIndex: 0,
            placeholder: '请输入标题'
        }
    }, methods: {
        handleNavClick: function (id) {
            alert(id);
        }, onInput() {
            console.log(this.noteData[this.currentIndex].noteTitle)
        }
    }
}
</script>

<template>
    <el-container>
        <el-aside width="15vw" class="header">
            <HeadIcon>
            </HeadIcon>
            <AsideNav :classifiData="classifiData" @handle-click="handleNavClick">
                
            </AsideNav>
            <RouterLink to="/main">Home</RouterLink>
        </el-aside>
        <RouterView></RouterView>

    </el-container>
</template>

<style scoped>
.title {
    width: 50%;
}

.title>>>.el-input__wrapper {
    border: 0;
    box-shadow: none;
}
</style>
