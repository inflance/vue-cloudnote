<template>
    <div>
        <el-dialog class="todo-page" v-model="dialogVisible" width=" 800px" :before-close="handleClose"
            :fullscreen="false">
            <div class="todo-menu">
                <div>

                    <el-backtop target=".todo-boxing .todo-undo" :visibility-height="1" :right="100" :bottom="100">
                        <div>
                            未完成
                        </div>
                    </el-backtop>
                </div>
            </div>
            <div class="todo-boxing">
                <el-scrollbar height="500px">

                    <div class="todo-undo">
                        <div>
                            未完成
                        </div>
                        <el-card v-for="item,index in undo">
                            <el-checkbox v-model="item.checked" :checked="item.checked" :indeterminate="false"
                                @change="handleUndoChecked(item,index)" :key="index">{{item.value}}
                            </el-checkbox>
                        </el-card>
                    </div>
                    <div class="todo-done">
                        <div>
                            已完成
                        </div>
                        <el-card v-for="item,index in done">
                            <el-checkbox v-model="item.checked" :checked="item.checked"
                                @change="handleDoneChecked(item,index)" :key="index">
                                <del>{{item.value}}</del>
                            </el-checkbox>
                        </el-card>
                    </div>



                </el-scrollbar>

                <el-input v-model="data" style="height:fit-content" @keydown.enter.native="handleInput">

                </el-input>

            </div>
        </el-dialog>
    </div>

</template>

<script>
export default {
    props:['dialogVisible'],
    data() {
        return {
            undo: [
                { value: '1', checked: false },
                { value: '2', checked: false },
                { value: '3', checked: false },
                { value: '121212', checked: false },
                { value: '121212', checked: false },
                { value: '121212', checked: false },
                { value: '121212', checked: false },
                { value: '121212', checked: false },
            ],
            done: [
                { value: '4', checked: true },
                { value: '5', checked: true },
                { value: '6', checked: true },
                { value: '121212', checked: true },
                { value: '121212', checked: true },
                { value: '121212', checked: true },
                { value: '121212', checked: true },
                { value: '121212', checked: true },
            ], data: ''
        }
    }, methods: {
        handleClose: function () {
            this.$emit('handle-close',false);
        }, handleInput() {
            this.undo.unshift({ value: this.data, checked: false });
            this.data = ''
        },
        handleUndoChecked(item, index) {

            this.done.unshift(item);
            console.log(item);
            this.undo.splice(index, 1);

        },
        handleDoneChecked(item, index) {

            this.undo.unshift(item);
            console.log(item);
            this.done.splice(index, 1);

        }
    }
}
</script>

<style scoped>
.todo-page {

    margin: 0;
    padding: 0;
}

.todo-menu {
    display: inline-block;
    width: 200px;
    height: 500px;
    background-color: antiquewhite;
}

.todo-boxing {
    position: relative;
    display: inline-block;
    height: 500px;
    width: 540px;

}

.todo-boxing {
    height: 450px;
    width: 540px;
}

.el-dialog__body {
    display: flex;
    flex-direction: row;
}
</style>