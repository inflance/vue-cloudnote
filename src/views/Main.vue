<script>
import TitleInput from '../components/TitleInput.vue';
import MdEditor from '../components/MdEditor.vue';
import HeadIcon from '../components/HeadIcon.vue';
import ScroBar from '../components/ScroBar.vue';
import AsideNav from '../components/AsideNav.vue';

export default {
    components: {TitleInput, MdEditor, HeadIcon, ScroBar, AsideNav,},
    data() {
        return {
            text: "",
        }
    }
}
</script>

<template>
    <el-container>
        <el-aside width="15vw" class="header">
            <HeadIcon>
            </HeadIcon>
            <AsideNav>

            </AsideNav>
        </el-aside>
        <el-aside width="20vw" class="header">
            <ScroBar></ScroBar>
        </el-aside>
        <el-container>
            <el-header>

                <TitleInput placeholder="请输入标题">

                </TitleInput>
            </el-header>
            <el-main>
                <MdEditor>

                </MdEditor>
            </el-main>
        </el-container>
    </el-container>
</template>

