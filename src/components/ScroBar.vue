<template>
    <div class="scroll-bar">
        <div class="scroll-head">
            <h2 class="scroll-head-title">{{value}}</h2>
            <el-button class="scroll-head-btn" @click="changeDiologVisb">
                添加新笔记
            </el-button>
        </div>
        <div class="scroll-bar">

            <el-scrollbar height="80vh">
                <el-card class="scroll-item" v-for="item in data">
                    <div>
                        {{item.title}}

                    </div>
                    <span class="scroll-ctime">创建时间:{{item.time}}</span>
                </el-card>
            </el-scrollbar>
            <div v-if="isEmpty" class="scroll-empty">
                笔记没了
                _(:зゝ∠)_
            </div>
        </div>
        <div>
            <el-dialog v-model="dialogFormVisible" title="添加新笔记" width="30%">
                <el-form-item>
                    <el-input v-model="formname" placeholder="请输入新笔记名" style="height: 50px;"/>
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

    </div>
</template>

<script>
import Card from "./Card.vue"
export default {
    components: { Card },
    updated() {
        if (this.data === null) {
            this.isEmpty = !this.isEmpty;
        }
    },
    data() {
        return {
            value: "math",
            dialogFormVisible: false,
            data: [
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
                { title: "数学", time: "2022-3-4" },
            ],
            isEmpty: false,
            formname: '',
        }
    }, methods: {
        changeDiologVisb: function () {
            this.dialogFormVisible = !this.dialogFormVisible;
        }
    }
}
</script>

<style>
.scroll-bar {
    /*border: 1px solid rgb(198, 196, 192);
    border-radius: 4px;*/
    position: relative;
}

.scroll-head-title {

    text-align: center;
}

.scroll-head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100%-3px);
    height: 30%;
    padding: 3px;
    /*border: 1px solid rgb(198, 196, 192);*/

}

.scroll-item :hover {
    background-color: antiquewhite;
}

.scroll-item {
    height: 60px;
    margin: 15px 10px;
    padding: 0;
}

.scroll-ctime {
    position: relative;
    float: right;
    font-size: 8px;
    color: rgb(105, 105, 105);
}

.scroll-empty {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: larger;
    text-align: center;
    margin-top: 10%;
}

#dialog-from {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;

}
</style>
