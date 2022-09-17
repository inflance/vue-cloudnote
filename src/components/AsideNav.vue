<template>
    <div class="aside-nav">
        <el-col>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose" :default-openeds="openeds">

                <RouterLink to="/home/main" class="to-home">
                    <el-menu-item index="1">
                        <el-icon>
                            
                        </el-icon>
                        <span>Home</span>
                    </el-menu-item>
                </RouterLink>


                <el-sub-menu index="2">

                    <template #title>
                        <el-icon>

                        </el-icon>
                        <span>分区</span>
                    </template>
                    <el-scrollbar height="30vh">
                        <el-menu-item-group title="">
                            <el-menu-item v-for="item,index in classifiData" :index="index.toString()"
                                @click="handleClick(item.classifiID)">{{item.classifiName}}</el-menu-item>
                        </el-menu-item-group>

                    </el-scrollbar>

                    <div class="nav-button">
                        <el-button @click="changeDiologVisb" type="warning" class="nav-btn">
                            添加新分区
                        </el-button>
                    </div>
                </el-sub-menu>
                <el-menu-item index="3">
                    <el-icon>

                    </el-icon>
                    <span>收藏</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>

                    </el-icon>
                    <span>待办</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>

                    </el-icon>
                    <span>回收站</span>
                </el-menu-item>
            </el-menu>
        </el-col>

    </div>
    <div>
        <el-dialog v-model="dialogFormVisible" title="添加新分区" width="30%">
            <el-form-item>
                <el-input v-model="formname" placeholder="请输入新分区名" style="height: 50px;" />
            </el-form-item>

            <el-form-item id="dialog-from">
                <el-button @click="changeDiologVisb">
                    取消
                </el-button>
                <el-button type="primary" @click="changeDiologVisb">
                    确定
                </el-button>
            </el-form-item>

        </el-dialog>
    </div>
</template>



<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    props: ['classifiData'],
    components: { RouterLink, RouterView },
    data() {
        return {
            dialogFormVisible: false,
            formname: '',

            //菜单默认展开
            openeds: ['1']
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        changeDiologVisb: function () {
            this.dialogFormVisible = !this.dialogFormVisible;
        }, handleClick: function (id) {
            alert(id)
            this.$emit('handle-click', id);
        }
    }
}
</script>

<style>
.nav-button {
    background-color: nav-button;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.nav-button .nav-btn {
    background-color: nav-button;
    width: 110px;
}

.to-home {
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    text-decoration: none;
}

.aside-nav{
    margin: 0 20px 0 0;
}
</style>