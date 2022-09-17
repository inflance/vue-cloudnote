<template>
    <div class="aside-nav">
        <el-col>
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                default-active="2" text-color="#fff" @open="handleOpen" @close="handleClose" :default-openeds="openeds">

                <RouterLink to="/home/main" class="to-home">
                    <el-menu-item index="1">
                        <el-icon>
                            <svg t="1663414901649" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5899" width="200" height="200">
                                <path
                                    d="M931.148 451.25L591.505 97.654c-21.106-21.953-49.313-34.034-79.551-34.034-30.235 0-58.448 12.081-79.554 34.034L92.76 451.25c-35.049 36.498-30.536 68.044-24.742 81.222 4.13 9.35 18.07 35.05 58.231 35.05h49.78v272.016c0 61.756 44.342 119.906 107.357 119.906h144.587v-287.87c0-30.866-4.675-48.062 26.848-48.062h114.268c31.52 0 26.845 17.196 26.845 48.061v287.872h144.588c63.013 0 107.358-58.15 107.358-119.906V567.523h49.782c40.16 0 54.1-25.7 58.229-35.05 5.793-13.18 10.306-44.726-24.743-81.224z m-33.486 60.28h-105.77v328.007c0 30.865-19.877 63.917-51.37 63.917h-88.6V671.572c0-61.761-19.79-104.05-82.832-104.05H454.821c-63.045 0-82.836 42.289-82.836 104.05v231.883h-88.599c-31.495 0-51.37-33.052-51.37-63.917V511.529H126.25c-0.984 0-1.888-3.852-2.708-3.907 1.94-3.388 5.276-11.975 10.825-17.743l339.671-353.35c10.142-10.578 24.467-17.057 38.353-16.924 13.888-0.133 27.342 6.346 37.483 16.923L889.54 489.88c5.549 5.768 8.885 14.355 10.825 17.743-0.818 0.055-1.72 3.907-2.704 3.907z"
                                    fill="#e6e6e6" p-id="5900"></path>
                            </svg>
                        </el-icon>
                        <span>Home</span>
                    </el-menu-item>
                </RouterLink>


                <el-sub-menu index="2">

                    <template #title>
                        <el-icon>
                            <svg t="1663414980833" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7328" width="200" height="200">
                                <path
                                    d="M122.065592 200.99371m-51.776224 0a50.597 50.597 0 1 0 103.552447 0 50.597 50.597 0 1 0-103.552447 0Z"
                                    p-id="7329" fill="#e6e6e6"></path>
                                <path
                                    d="M122.065592 459.888132c-28.593222 0-51.776224 23.171746-51.776224 51.763944 0 28.605501 23.183002 51.774177 51.776224 51.774177 28.593222 0 51.777247-23.167652 51.777247-51.774177C173.841815 483.059877 150.658813 459.888132 122.065592 459.888132z"
                                    p-id="7330" fill="#e6e6e6"></path>
                                <path
                                    d="M122.065592 770.535241c-28.593222 0-51.776224 23.183002-51.776224 51.776224 0 28.609595 23.183002 51.788503 51.776224 51.788503 28.593222 0 51.777247-23.178909 51.777247-51.788503C173.841815 793.718243 150.658813 770.535241 122.065592 770.535241z"
                                    p-id="7331" fill="#e6e6e6"></path>
                                <path d="M251.505639 796.424888l698.980555 0 0 51.776224-698.980555 0 0-51.776224Z"
                                    p-id="7332" fill="#e6e6e6"></path>
                                <path d="M251.505639 485.765499l698.980555 0 0 51.7752-698.980555 0 0-51.7752Z"
                                    p-id="7333" fill="#e6e6e6"></path>
                                <path d="M251.505639 175.105087l698.980555 0 0 51.777247-698.980555 0 0-51.777247Z"
                                    p-id="7334" fill="#e6e6e6"></path>
                            </svg>
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
                        <svg t="1663414816572" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4377" width="200" height="200">
                            <path
                                d="M946.44567 407.179676c-3.706415-11.056823-13.268188-19.154245-24.823362-20.929682l-263.117606-40.614L540.930913 93.91802c-5.108345-10.93198-16.071024-17.939581-28.155247-17.971303-0.030699 0-0.062422 0-0.062422 0-12.021801 0-22.985504 6.945179-28.155247 17.84646L365.79001 345.247138l-263.917832 39.507806c-11.399631 1.961678-20.774139 10.060123-24.355711 21.054525-3.613294 10.963703-0.778736 23.047926 7.257288 31.332612l191.202717 196.684568-45.6282 277.132808c-1.930979 11.741415 3.0208 23.608697 12.769838 30.491455 9.717316 6.882757 22.549575 7.630794 32.983205 1.868557l235.366565-129.47177 234.868215 130.282229c4.703115 2.616594 9.904581 3.924379 15.106046 3.924379 6.291287 0 12.551874-1.868557 17.877159-5.699816 9.748015-6.852058 14.763239-18.687618 12.862959-30.460756L747.488339 634.635061l191.669344-195.84341C947.286828 430.476265 950.121386 418.2365 946.44567 407.179676zM691.986257 602.337471c-6.882757 7.039323-10.060123 16.974603-8.471952 26.722618l37.000706 229.480508L526.666024 751.025908c-9.343809-5.232165-20.74344-5.232165-30.117948-0.062422L302.262138 857.856006l37.779442-229.387387c1.588171-9.717316-1.52575-19.652596-8.40953-26.754341L170.703847 436.176081l220.156142-31.686676c2.191922-0.378623 4.288676-0.980327 6.274914-1.771343 7.674796-2.63092 14.32117-8.233522 18.061354-16.156982l97.392144-206.183919 96.550986 206.712969c4.422729 9.406231 13.205766 16.008602 23.483854 17.596773l219.638349 33.886785L691.986257 602.337471z"
                                p-id="4378" fill="#e6e6e6"></path>
                        </svg>
                    </el-icon>
                    <span>收藏</span>
                </el-menu-item>
                <el-menu-item index="4" @click="dialogVisible=true">
                    <el-icon>
                        <svg t="1663414746434" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3434" width="200" height="200">
                            <path d="M977.2 782.8v-736H46.8v930.4h889.1v-76H122.8V122.8h778.4v660z" fill="#e6e6e6"
                                p-id="3435"></path>
                            <path d="M274.8 459.8L227.2 519l244.2 196 385.1-373.3-52.9-54.6-336.9 326.7z" fill="#e6e6e6"
                                p-id="3436"></path>
                        </svg>
                    </el-icon>
                    <span>待办</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <el-icon>
                        <svg t="1663414682145" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2439" width="200" height="200">
                            <path
                                d="M230.776 818.992c0 56.512 45.623 102.616 102.138 102.616h358.172c56.515 0 102.533-46.104 102.533-102.616V409.954H230.776v409.038z m383.756-332.575c0-14.115 11.457-25.582 25.584-25.582 14.127 0 25.584 11.467 25.584 25.582V793.41c0 14.14-11.457 25.583-25.584 25.583-14.127 0-25.584-11.443-25.584-25.583V486.417z m-127.918 0c0-14.115 11.456-25.582 25.584-25.582 14.127 0 25.583 11.467 25.583 25.582V793.41c0 14.14-11.456 25.583-25.583 25.583-14.128 0-25.584-11.443-25.584-25.583V486.417z m-127.919 0c0-14.115 11.457-25.582 25.584-25.582 14.127 0 25.584 11.467 25.584 25.582V793.41c0 14.14-11.457 25.583-25.584 25.583-14.127 0-25.584-11.443-25.584-25.583V486.417z m434.726-281.124H640.116v-51.451c0-28.256-23.108-50.88-51.365-50.88H435.25c-28.258 0-50.97 22.624-50.97 50.88v51.45h-153.7c-28.258 0-50.97 22.625-50.97 50.88v51.166c0 28.256 22.687 51.45 50.931 51.45h562.932c28.231 0 51.314-23.194 51.314-51.45v-51.166c0-28.254-23.108-50.88-51.365-50.88z m-204.472 0H435.446v-25.869c0-14.139 11.258-25.297 25.387-25.297h102.334c14.128 0 25.782 11.158 25.782 25.297v25.869z"
                                fill="#e6e6e6" p-id="2440"></path>
                        </svg>
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
    <div>
       <Todo :dialogVisible="dialogVisible" @handle-close="handleTodoClose">

       </Todo>
    </div>

</template>



<script>
import { RouterLink, RouterView } from 'vue-router'
import Todo from './Todo.vue';

export default {
    props: ['classifiData'],
    components: { RouterLink, RouterView, Todo },
    data() {
        return {
            dialogFormVisible: false,
            dialogVisible:false,
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
        },handleTodoClose:function(bool){
            this.dialogVisible = bool;
        }
    }
}
</script>

<style scoped>
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

.aside-nav {
    margin: 0 20px 0 0;
}
</style>